"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

type VisualizationMode = "velocity" | "pressure" | "wss"

interface VesselMeshProps {
  mode: VisualizationMode
  isAnimating: boolean
}

export default function VesselMesh({ mode, isAnimating }: VesselMeshProps) {
  const meshRef = useRef<THREE.Group>(null)
  const { scene } = useThree()

  // Generate fake vessel geometry with hemodynamic data
  const vesselData = useMemo(() => {
    const vessels = []

    // Main carotid artery (with aneurysm simulation)
    const carotidCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -3, 0),
      new THREE.Vector3(0.5, -1, 0),
      new THREE.Vector3(0.7, 1, 0),
      new THREE.Vector3(0.8, 2.5, 0.5),
    ])

    // Middle cerebral artery (stenosis simulation)
    const mcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.8, 2.5, 0.5),
      new THREE.Vector3(1.5, 3, 1),
      new THREE.Vector3(2, 3.5, 1.5),
      new THREE.Vector3(2.5, 4, 2),
    ])

    // Anterior cerebral artery
    const acaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.8, 2.5, 0.5),
      new THREE.Vector3(0.5, 3, 1),
      new THREE.Vector3(0, 3.5, 1.5),
      new THREE.Vector3(-1.5, 4, 2),
    ])

    vessels.push({ curve: carotidCurve, name: "carotid", radius: 0.35 })
    vessels.push({ curve: mcaCurve, name: "mca", radius: 0.22 })
    vessels.push({ curve: acaCurve, name: "aca", radius: 0.22 })

    return vessels
  }, [])

  const getColor = (t: number, vesselName: string, mode: VisualizationMode): THREE.Color => {
    if (mode === "velocity") {
      const velocity = vesselName === "mca" ? 0.8 + t * 0.2 : 0.3 + t * 0.4
      let hue: number
      if (velocity < 0.5) {
        // Cyan to blue
        hue = 0.55 + (0.5 - velocity) * 0.15
      } else {
        // Blue to red through magenta
        hue = (1 - velocity) * 0.8
      }
      return new THREE.Color().setHSL(hue, 1, 0.5)
    } else if (mode === "pressure") {
      const pressure = vesselName === "carotid" ? 0.6 + t * 0.3 : 0.3 + t * 0.2
      const hue = Math.max(0.08, 0.33 - pressure * 0.28)
      const saturation = 0.95
      const lightness = 0.45 + Math.sin(t * Math.PI) * 0.1
      return new THREE.Color().setHSL(hue, saturation, lightness)
    } else {
      const wss = vesselName === "carotid" ? 0.2 + t * 0.2 : 0.7 + t * 0.2
      const hue = 0.88 - wss * 0.18
      const saturation = 0.95 + Math.sin(t * Math.PI) * 0.05
      const lightness = 0.5 + Math.cos(t * Math.PI) * 0.05
      return new THREE.Color().setHSL(hue, saturation, lightness)
    }
  }

  // Create vessel geometries
  useEffect(() => {
    if (!meshRef.current) return

    meshRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        ;(child.material as THREE.Material).dispose()
      }
    })
    meshRef.current.clear()

    vesselData.forEach(({ curve, name, radius }) => {
      const points = curve.getPoints(100)
      const tubeGeometry = new THREE.BufferGeometry()
      const positions: number[] = []
      const colors: number[] = []
      const normals: number[] = []
      const circleCount = 16

      for (let i = 0; i < points.length; i++) {
        const t = i / (points.length - 1)
        const point = points[i]

        const nextPoint = i < points.length - 1 ? points[i + 1] : point
        const tangent = new THREE.Vector3().subVectors(nextPoint, point).normalize()

        const up = Math.abs(tangent.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)
        const right = new THREE.Vector3().crossVectors(tangent, up).normalize()
        up.crossVectors(right, tangent).normalize()

        let effectiveRadius = radius
        if (name === "mca" && t > 0.25 && t < 0.75) {
          const stenosisFactor = Math.sin(((t - 0.25) / 0.5) * Math.PI) * 0.55
          effectiveRadius *= 1 - stenosisFactor
        }
        if (name === "carotid" && t > 0.45 && t < 0.65) {
          const aneurysmFactor = Math.sin(((t - 0.45) / 0.2) * Math.PI) * 0.65
          effectiveRadius *= 1 + aneurysmFactor
        }

        for (let j = 0; j < circleCount; j++) {
          const angle = (j / circleCount) * Math.PI * 2
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)

          const circlePoint = new THREE.Vector3()
            .addScaledVector(right, cos * effectiveRadius)
            .addScaledVector(up, sin * effectiveRadius)
            .add(point)

          positions.push(circlePoint.x, circlePoint.y, circlePoint.z)

          const color = getColor(t, name, mode)
          colors.push(color.r, color.g, color.b)

          const normal = new THREE.Vector3().addScaledVector(right, cos).addScaledVector(up, sin).normalize()
          normals.push(normal.x, normal.y, normal.z)
        }
      }

      const indices: number[] = []
      for (let i = 0; i < points.length - 1; i++) {
        for (let j = 0; j < circleCount; j++) {
          const a = i * circleCount + j
          const b = i * circleCount + ((j + 1) % circleCount)
          const c = (i + 1) * circleCount + ((j + 1) % circleCount)
          const d = (i + 1) * circleCount + j

          indices.push(a, b, c)
          indices.push(a, c, d)
        }
      }

      tubeGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3))
      tubeGeometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3))
      tubeGeometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(normals), 3))
      tubeGeometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1))

      const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        emissive: 0x2a2a4a,
        emissiveIntensity: 0.4,
        metalness: 0.4,
        roughness: 0.35,
        envMapIntensity: 1.5,
        wireframe: false,
      })

      const mesh = new THREE.Mesh(tubeGeometry, material)
      meshRef.current!.add(mesh)
    })
  }, [vesselData, mode])

  useFrame(({ clock }) => {
    if (meshRef.current && isAnimating) {
      meshRef.current.rotation.z += 0.0002
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.4) * 0.25
    }
  })

  return <group ref={meshRef} />
}
