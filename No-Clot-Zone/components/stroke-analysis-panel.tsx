"use client"

import { AlertCircle, TrendingUp, Heart, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

interface CFDData {
  maxVelocity: number
  minVelocity: number
  avgWSS: number
  lowWSSArea: number
  highWSSArea: number
  maxPressure: number
  stenosisPercentage: number
}

interface StrokeRiskData {
  overallRisk: "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
  riskScore: number
  findings: Array<{
    type: "critical" | "warning" | "info"
    title: string
    description: string
    hemodynamicFactor?: string
  }>
  recommendations: string[]
  cfdMetrics: CFDData
}

export default function StrokeAnalysisPanel() {
  // Fake stroke risk data from analysis
  const strokeRiskData: StrokeRiskData = {
    overallRisk: "MODERATE",
    riskScore: 62,
    cfdMetrics: {
      maxVelocity: 1.8, // m/s
      minVelocity: 0.15, // m/s
      avgWSS: 2.3, // Pa
      lowWSSArea: 18, // % of vessel
      highWSSArea: 12, // % of vessel
      maxPressure: 140, // mmHg
      stenosisPercentage: 55, // % narrowing
    },
    findings: [
      {
        type: "critical",
        title: "Moderate Stenosis Detected",
        description: "Middle cerebral artery shows 55% luminal narrowing",
        hemodynamicFactor: "Velocity increased to 1.8 m/s (normal: 0.5-1.0 m/s)",
      },
      {
        type: "warning",
        title: "Aneurysm with Low WSS",
        description: "5mm saccular aneurysm at carotid bifurcation with hemodynamically active profile",
        hemodynamicFactor: "18% of aneurysm surface shows low WSS (thrombus-prone)",
      },
      {
        type: "warning",
        title: "Flow Disturbance Zone",
        description: "Recirculation and vortex formation detected distal to stenosis",
        hemodynamicFactor: "Low WSS + high turbulence kinetic energy",
      },
      {
        type: "info",
        title: "Pressure Gradient",
        description: "Significant pressure drop (35 mmHg) across stenosis segment",
        hemodynamicFactor: "Indicates hemodynamically significant narrowing",
      },
    ],
    recommendations: [
      "Close clinical follow-up with imaging in 3 months",
      "Consider statin therapy for vascular protection",
      "Blood pressure management (target <140/90 mmHg)",
      "Lifestyle modifications: reduce sodium, increase aerobic exercise",
      "Consider endovascular intervention if symptoms develop",
    ],
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "LOW":
        return "bg-green-500/20 border-green-500/50 text-green-600"
      case "MODERATE":
        return "bg-yellow-500/20 border-yellow-500/50 text-yellow-600"
      case "HIGH":
        return "bg-orange-500/20 border-orange-500/50 text-orange-600"
      case "CRITICAL":
        return "bg-red-500/20 border-red-500/50 text-red-600"
      default:
        return "bg-slate-500/20 border-slate-500/50 text-slate-600"
    }
  }

  const getFindingIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
      case "warning":
        return <TrendingUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
      default:
        return <Heart className="w-5 h-5 text-blue-500 flex-shrink-0" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Overall Risk Assessment */}
      <Card className="bg-card border-border p-6 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Stroke Risk Assessment</h2>

        <div className={`border rounded-xl p-6 ${getRiskColor(strokeRiskData.overallRisk)}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium opacity-75">Overall Risk Level</p>
              <p className="text-3xl font-bold">{strokeRiskData.overallRisk}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium opacity-75">Risk Score</p>
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${strokeRiskData.riskScore * 2.827} 282.7`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{strokeRiskData.riskScore}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* CFD Hemodynamic Metrics */}
      <Card className="bg-card border-border p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" />
          CFD Hemodynamic Metrics
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Max Velocity</p>
            <p className="text-2xl font-bold text-foreground">{strokeRiskData.cfdMetrics.maxVelocity}</p>
            <p className="text-xs text-muted-foreground mt-1">m/s</p>
            <p className="text-xs text-yellow-600 mt-2">↑ Elevated (stenosis)</p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Min Velocity</p>
            <p className="text-2xl font-bold text-foreground">{strokeRiskData.cfdMetrics.minVelocity}</p>
            <p className="text-xs text-muted-foreground mt-1">m/s</p>
            <p className="text-xs text-blue-600 mt-2">Normal range</p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Avg WSS</p>
            <p className="text-2xl font-bold text-foreground">{strokeRiskData.cfdMetrics.avgWSS}</p>
            <p className="text-xs text-muted-foreground mt-1">Pa</p>
            <p className="text-xs text-blue-600 mt-2">Moderate level</p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Low WSS Area</p>
            <p className="text-2xl font-bold text-red-600">{strokeRiskData.cfdMetrics.lowWSSArea}%</p>
            <p className="text-xs text-muted-foreground mt-1">Thrombus-prone</p>
            <p className="text-xs text-red-600 mt-2">⚠ High risk</p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">High WSS Area</p>
            <p className="text-2xl font-bold text-orange-600">{strokeRiskData.cfdMetrics.highWSSArea}%</p>
            <p className="text-xs text-muted-foreground mt-1">Rupture-prone</p>
            <p className="text-xs text-orange-600 mt-2">⚠ Caution</p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Stenosis</p>
            <p className="text-2xl font-bold text-yellow-600">{strokeRiskData.cfdMetrics.stenosisPercentage}%</p>
            <p className="text-xs text-muted-foreground mt-1">Luminal narrowing</p>
            <p className="text-xs text-yellow-600 mt-2">Significant</p>
          </div>
        </div>

        <div className="bg-background rounded-lg p-4 border border-border">
          <p className="text-sm font-semibold text-foreground mb-2">Hemodynamic Status</p>
          <p className="text-sm text-muted-foreground">
            The CFD analysis reveals a hemodynamically significant stenosis with associated flow disturbances. The
            combination of high-velocity jets and low-WSS recirculation zones creates an environment prone to both
            thromboembolism and aneurysm growth.
          </p>
        </div>
      </Card>

      {/* Clinical Findings */}
      <Card className="bg-card border-border p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground">Clinical Findings & Risk Factors</h3>

        <div className="space-y-3">
          {strokeRiskData.findings.map((finding, idx) => (
            <div key={idx} className="bg-background rounded-lg p-4 border border-border space-y-2">
              <div className="flex items-start gap-3">
                {getFindingIcon(finding.type)}
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{finding.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{finding.description}</p>
                  {finding.hemodynamicFactor && (
                    <p className="text-xs bg-primary/10 text-primary rounded mt-2 p-2">
                      <strong>Hemodynamic Factor:</strong> {finding.hemodynamicFactor}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="bg-card border-border p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground">Clinical Recommendations</h3>

        <ul className="space-y-3">
          {strokeRiskData.recommendations.map((rec, idx) => (
            <li key={idx} className="flex gap-3 text-sm">
              <span className="text-accent font-bold flex-shrink-0">{idx + 1}.</span>
              <span className="text-muted-foreground">{rec}</span>
            </li>
          ))}
        </ul>

        <div className="bg-accent/10 border border-accent/50 rounded-lg p-4 mt-4">
          <p className="text-sm text-accent font-semibold mb-2">Next Steps:</p>
          <p className="text-sm text-muted-foreground">
            Follow-up MRA imaging in 3 months is recommended. If neurological symptoms develop (sudden weakness, speech
            difficulty, vision changes), seek emergency care immediately.
          </p>
        </div>
      </Card>
    </div>
  )
}
