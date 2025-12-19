"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import VesselMesh from "./vessel-mesh"
import FlowParticles from "./flow-particles"
import { Button } from "@/components/ui/button"

type VisualizationMode = "velocity" | "pressure" | "wss"

export default function BloodFlowVisualizer() {
  const [mode, setMode] = useState<VisualizationMode>("velocity")
  const [isAnimating, setIsAnimating] = useState(true)
  const [showParticles, setShowParticles] = useState(true)

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-4">
        <p className="text-sm font-semibold text-foreground">Visualization Mode</p>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={() => setMode("velocity")}
            variant={mode === "velocity" ? "default" : "outline"}
            size="sm"
            className={mode === "velocity" ? "bg-primary" : ""}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500 mr-2"></div>
            Velocity Field
          </Button>

          <Button
            onClick={() => setMode("pressure")}
            variant={mode === "pressure" ? "default" : "outline"}
            size="sm"
            className={mode === "pressure" ? "bg-accent" : ""}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 mr-2"></div>
            Pressure
          </Button>

          <Button
            onClick={() => setMode("wss")}
            variant={mode === "wss" ? "default" : "outline"}
            size="sm"
            className={mode === "wss" ? "bg-destructive" : ""}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 mr-2"></div>
            Wall Shear Stress
          </Button>
        </div>

        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={isAnimating}
            onChange={(e) => setIsAnimating(e.target.checked)}
            className="w-4 h-4 rounded border-border"
          />
          <span className="text-muted-foreground">Enable Flow Animation</span>
        </label>

        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showParticles}
            onChange={(e) => setShowParticles(e.target.checked)}
            className="w-4 h-4 rounded border-border"
          />
          <span className="text-muted-foreground">Show Particle Flow Streaks</span>
        </label>

        <div className="pt-2 border-t border-border space-y-3">
          <p className="text-sm font-semibold text-foreground">Color Meanings & Clinical Interpretation:</p>
          <div className="space-y-2 text-xs">
            {mode === "velocity" && (
              <div className="bg-background rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-red-600 rounded"></div>
                  <span className="font-medium">Low (Cyan) → High (Red) Velocity</span>
                </div>
                <div className="space-y-1 text-muted-foreground ml-2">
                  <p>
                    <strong>Cyan:</strong> Normal/slow flow (safe, stable hemodynamics)
                  </p>
                  <p>
                    <strong>Red:</strong> High-speed flow (stenosis, vessel narrowing)
                  </p>
                  <p>
                    <strong>Clinical Risk:</strong> Red zones indicate flow acceleration and turbulence, increasing clot
                    formation risk
                  </p>
                </div>
              </div>
            )}
            {mode === "pressure" && (
              <div className="bg-background rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-3 bg-gradient-to-r from-emerald-600 via-lime-500 to-amber-600 rounded"></div>
                  <span className="font-medium">Low (Green) → High (Amber) Pressure</span>
                </div>
                <div className="space-y-1 text-muted-foreground ml-2">
                  <p>
                    <strong>Green:</strong> Normal pressure distribution (stable vessel)
                  </p>
                  <p>
                    <strong>Amber/Yellow:</strong> Elevated pressure zones (stress points)
                  </p>
                  <p>
                    <strong>Clinical Risk:</strong> High pressure zones correlate with aneurysm rupture risk and
                    endothelial damage
                  </p>
                </div>
              </div>
            )}
            {mode === "wss" && (
              <div className="bg-background rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-3 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-400 rounded"></div>
                  <span className="font-medium">Thrombus Risk (Violet) ↔ Rupture Risk (Magenta)</span>
                </div>
                <div className="space-y-1 text-muted-foreground ml-2">
                  <p>
                    <strong>Violet/Purple:</strong> Low WSS zones (thrombogenic - blood clot risk)
                  </p>
                  <p>
                    <strong>Magenta/Pink:</strong> High WSS zones (rupture-prone regions)
                  </p>
                  <p>
                    <strong>Clinical Risk:</strong> Both extremes are pathological; purple predicts clot formation,
                    magenta predicts aneurysm rupture
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3D Canvas with Advanced Rendering */}
      <div
        className="bg-slate-950 border border-border rounded-2xl overflow-hidden shadow-2xl"
        style={{ height: "700px" }}
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance", precision: "highp" }}
        >
          {/* Advanced Lighting Setup */}
          <ambientLight intensity={0.35} />
          <pointLight position={[12, 12, 12]} intensity={2.2} color="#ffffff" />
          <pointLight position={[-12, -10, 8]} intensity={1.5} color="#0ea5e9" />
          <pointLight position={[0, 0, 18]} intensity={1} color="#a78bfa" />
          <pointLight position={[8, -8, -10]} intensity={0.8} color="#ec4899" />

          <Environment preset="night" />

          <Suspense fallback={null}>
            {/* Main vessel visualization */}
            <VesselMesh mode={mode} isAnimating={isAnimating} />
            {showParticles && <FlowParticles mode={mode} isAnimating={isAnimating} />}
          </Suspense>

          {/* Enhanced bloom effect for professional glow */}
          <EffectComposer>
            <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.85} intensity={2} />
          </EffectComposer>

          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} autoRotate={true} autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Info Card */}
      <div className="bg-card border border-border rounded-xl p-4 text-sm">
        <p className="text-muted-foreground">
          {mode === "velocity" &&
            "Velocity fields show blood flow speed throughout the vessels. Red zones indicate flow acceleration and turbulence, increasing clot formation risk, while blue shows recirculation zones. Particle streaks visualize flow direction and speed."}
          {mode === "pressure" &&
            "Pressure distribution reveals energy loss across stenotic segments. Amber/yellow zones correlate with aneurysm rupture risk and structural stress points on vessel walls."}
          {mode === "wss" &&
            "Wall Shear Stress (WSS) indicates endothelial stress patterns. Purple regions are thrombus-prone (clot formation risk), while magenta zones show high WSS correlating with aneurysm growth and rupture potential."}
        </p>
      </div>
    </div>
  )
}
