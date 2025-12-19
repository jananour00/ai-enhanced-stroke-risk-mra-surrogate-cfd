"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type VisualizationMode = "velocity" | "pressure" | "wss"

interface FlowParticlesProps {
  mode: VisualizationMode
  isAnimating: boolean
}

export default function FlowParticles({ mode, isAnimating }: FlowParticlesProps) {
  const groupRef = useRef<THREE.Group>(null)
  const particleDataRef = useRef<{
    positions: Float32Array
    colors: Float32Array
    speeds: number[]
    paths: Array<{ curve: THREE.CatmullRomCurve3; speed: number; name: string }>
    particleCount: number
  } | null>(null)

  const vesselPaths = useMemo(() => {
    const carotidCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -3, 0),
      new THREE.Vector3(0.5, -1, 0),
      new THREE.Vector3(0.7, 1, 0),
      new THREE.Vector3(0.8, 2.5, 0.5),
    ])

    const mcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.8, 2.5, 0.5),
      new THREE.Vector3(1.5, 3, 1),
      new THREE.Vector3(2, 3.5, 1.5),
      new THREE.Vector3(2.5, 4, 2),
    ])

    const acaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.8, 2.5, 0.5),
      new THREE.Vector3(0.5, 3, 1),
      new THREE.Vector3(0, 3.5, 1.5),
      new THREE.Vector3(-1.5, 4, 2),
    ])

    return [
      { curve: carotidCurve, speed: 0.3, name: "carotid" },
      { curve: mcaCurve, speed: 0.8, name: "mca" },
      { curve: acaCurve, speed: 0.4, name: "aca" },
    ]
  }, [])

  useEffect(() => {
    const particleCount = 1200
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const speeds: number[] = new Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const pathIndex = i % vesselPaths.length
      const path = vesselPaths[pathIndex]
      const t = Math.random()
      const point = path.curve.getPoint(t)

      positions[i * 3] = point.x
      positions[i * 3 + 1] = point.y
      positions[i * 3 + 2] = point.z

      let color: THREE.Color
      if (mode === "velocity") {
        const velocity = path.name === "mca" ? 0.8 + t * 0.2 : 0.3 + t * 0.4
        let hue: number
        if (velocity < 0.5) {
          hue = 0.55 + (0.5 - velocity) * 0.15
        } else {
          hue = (1 - velocity) * 0.8
        }
        color = new THREE.Color().setHSL(hue, 0.95, 0.55)
      } else if (mode === "pressure") {
        const pressure = path.name === "carotid" ? t * 0.3 : t * 0.2
        const hue = Math.max(0.08, 0.33 - pressure * 0.28)
        color = new THREE.Color().setHSL(hue, 0.9, 0.5)
      } else {
        const wss = path.name === "carotid" ? 0.2 + t * 0.2 : 0.7 + t * 0.2
        const hue = 0.88 - wss * 0.18
        color = new THREE.Color().setHSL(hue, 0.95, 0.55)
      }

      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      speeds[i] = path.speed + (Math.random() - 0.5) * 0.25
    }

    particleDataRef.current = {
      positions,
      colors,
      speeds,
      paths: vesselPaths,
      particleCount,
    }
  }, [mode, vesselPaths])

  useFrame(() => {
    if (!groupRef.current || !isAnimating || !particleDataRef.current) return

    const data = particleDataRef.current
    const { positions, speeds, paths, particleCount } = data
    const time = Date.now() / 1000

    for (let i = 0; i < particleCount; i++) {
      const pathIndex = i % paths.length
      const path = paths[pathIndex]
      if (!path || !path.curve) continue

      const speed = speeds[i]

      const baseT = (time * speed * 0.5) % 1
      const pulse = Math.sin(time * 2) * 0.02
      const t = Math.max(0, Math.min(1, baseT + pulse))

      try {
        const point = path.curve.getPoint(t)
        if (point && typeof point.x === "number" && typeof point.y === "number" && typeof point.z === "number") {
          positions[i * 3] = point.x + (Math.random() - 0.5) * 0.04
          positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.04
          positions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.04
        }
      } catch (error) {
        // Skip this particle on error
        continue
      }
    }

    if (groupRef.current.children[0]) {
      const points = groupRef.current.children[0] as THREE.Points
      const positionAttribute = points.geometry.getAttribute("position") as THREE.BufferAttribute
      positionAttribute.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {particleDataRef.current && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={particleDataRef.current.positions}
              count={particleDataRef.current.particleCount}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              array={particleDataRef.current.colors}
              count={particleDataRef.current.particleCount}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.18} sizeAttenuation vertexColors transparent opacity={1} />
        </points>
      )}
    </group>
  )
}
