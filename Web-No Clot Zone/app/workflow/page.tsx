"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Upload, Brain, Activity, Target, CheckCircle, Clock } from "lucide-react"

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Model <span className="text-primary">Workflow</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From MRA scan to stroke risk prediction in under 20 seconds. See how our three AI models work together
              seamlessly.
            </p>
          </div>

          {/* Timeline Workflow */}
          <div className="relative mb-20">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-destructive hidden md:block" />

            {/* Step 1: Input */}
            <div className="relative mb-16">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  <Upload className="w-8 h-8" />
                </div>
                <Card className="flex-1 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-foreground">Input: MRA Scan Upload</h3>
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        0s
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Clinician uploads Time-of-Flight (TOF) MRA scan in DICOM (.dcm) or NIfTI (.nii) format.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 border border-border">
                        <p className="text-sm font-semibold text-foreground mb-1">Format Support</p>
                        <p className="text-xs text-muted-foreground">.dcm, .nii, .nii.gz</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 border border-border">
                        <p className="text-sm font-semibold text-foreground mb-1">Resolution</p>
                        <p className="text-xs text-muted-foreground">0.5mm isotropic voxels</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 border border-border">
                        <p className="text-sm font-semibold text-foreground mb-1">Typical Size</p>
                        <p className="text-xs text-muted-foreground">40-60 MB per scan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-16">
              <ArrowRight className="w-8 h-8 text-primary rotate-90 animate-pulse" />
            </div>

            {/* Step 2: Model 1 */}
            <div className="relative mb-16">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  <Brain className="w-8 h-8" />
                </div>
                <Card className="flex-1 border-primary/50 bg-gradient-to-br from-primary/10 to-transparent">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-foreground">Model 1: Vessel Segmentation</h3>
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        2.5s
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      3D U-Net with ResNet encoder extracts cerebrovascular anatomy from MRA volume.
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6 mb-6 border border-border">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Processing Steps
                      </h4>
                      <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-primary">1.</span>
                          <span>MRA volume normalized and preprocessed (intensity scaling, bias correction)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-primary">2.</span>
                          <span>3D U-Net performs voxel-wise classification (vessel vs. background)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-primary">3.</span>
                          <span>Post-processing removes noise and refines topology</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-primary">4.</span>
                          <span>Binary mask converted to 3D surface mesh for visualization</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 border border-primary/30">
                        <p className="text-sm font-semibold text-foreground mb-2">Output</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Binary segmentation mask</li>
                          <li>• 3D vascular surface mesh</li>
                          <li>• Aneurysm location coordinates</li>
                          <li>• Stenosis regions identified</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 border border-primary/30">
                        <p className="text-sm font-semibold text-foreground mb-2">Key Metrics</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Dice Score: 0.92</li>
                          <li>• Sensitivity: 98.3%</li>
                          <li>• Specificity: 96.7%</li>
                          <li>• False Positive Rate: &lt;3%</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-16">
              <ArrowRight className="w-8 h-8 text-accent rotate-90 animate-pulse" />
            </div>

            {/* Step 3: Model 2 */}
            <div className="relative mb-16">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  <Activity className="w-8 h-8" />
                </div>
                <Card className="flex-1 border-accent/50 bg-gradient-to-br from-accent/10 to-transparent">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-foreground">Model 2: Surrogate CFD</h3>
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        15s
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Physics-informed neural network computes hemodynamic biomarkers 1000× faster than traditional CFD.
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6 mb-6 border border-border">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Hemodynamic Simulation
                      </h4>
                      <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-accent">1.</span>
                          <span>Segmented mesh converted to computational domain with boundary conditions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-accent">2.</span>
                          <span>PINN predicts velocity field (u, v, w components) at each mesh node</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-accent">3.</span>
                          <span>Pressure distribution calculated from Navier-Stokes momentum balance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-accent">4.</span>
                          <span>Wall Shear Stress (WSS) computed as tangential velocity gradient at vessel walls</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-500/50">
                        <p className="text-sm font-semibold text-foreground mb-2">Velocity Field</p>
                        <p className="text-xs text-muted-foreground mb-2">Blood flow speed (cm/s)</p>
                        <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">Normal: 20-40</p>
                        <p className="text-xs font-mono text-red-600 dark:text-red-400">Stenosis: &gt;80</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-lg p-4 border border-green-500/50">
                        <p className="text-sm font-semibold text-foreground mb-2">Pressure</p>
                        <p className="text-xs text-muted-foreground mb-2">Blood pressure (mmHg)</p>
                        <p className="text-xs font-mono text-green-600 dark:text-green-400">Systolic: 120</p>
                        <p className="text-xs font-mono text-amber-600 dark:text-amber-400">Gradient: 10-15</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/50">
                        <p className="text-sm font-semibold text-foreground mb-2">WSS</p>
                        <p className="text-xs text-muted-foreground mb-2">Wall shear stress (Pa)</p>
                        <p className="text-xs font-mono text-purple-600 dark:text-purple-400">Normal: 1-7</p>
                        <p className="text-xs font-mono text-red-600 dark:text-red-400">Risk: &lt;0.4 or &gt;10</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-16">
              <ArrowRight className="w-8 h-8 text-destructive rotate-90 animate-pulse" />
            </div>

            {/* Step 4: Model 3 */}
            <div className="relative mb-16">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-destructive to-destructive/70 flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  <Target className="w-8 h-8" />
                </div>
                <Card className="flex-1 border-destructive/50 bg-gradient-to-br from-destructive/10 to-transparent">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-foreground">Model 3: Risk Prediction</h3>
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        1.5s
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Ensemble classifier combines morphological + hemodynamic features to predict stroke risk.
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6 mb-6 border border-border">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-destructive" />
                        Feature Integration & Classification
                      </h4>
                      <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-destructive">1.</span>
                          <span>Extract 47 morphological features (aneurysm size, neck width, vessel tortuosity)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-destructive">2.</span>
                          <span>Extract 38 hemodynamic features (max/min WSS, pressure gradient, OSI)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-destructive">3.</span>
                          <span>Ensemble of XGBoost + Random Forest classifiers predicts rupture probability</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-destructive">4.</span>
                          <span>Attention mechanism highlights high-risk vascular regions</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                        <p className="text-sm font-semibold text-foreground mb-2">Risk Categories</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>
                            • <span className="text-green-600 dark:text-green-400 font-semibold">Low:</span> &lt;20%
                            rupture risk
                          </li>
                          <li>
                            • <span className="text-amber-600 dark:text-amber-400 font-semibold">Moderate:</span> 20-50%
                            risk
                          </li>
                          <li>
                            • <span className="text-orange-600 dark:text-orange-400 font-semibold">High:</span> 50-75%
                            risk
                          </li>
                          <li>
                            • <span className="text-red-600 dark:text-red-400 font-semibold">Critical:</span> &gt;75%
                            risk
                          </li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                        <p className="text-sm font-semibold text-foreground mb-2">Performance</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Accuracy: 89.3%</li>
                          <li>• AUC-ROC: 0.94</li>
                          <li>• Sensitivity: 91.5%</li>
                          <li>• Specificity: 87.2%</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-16">
              <ArrowRight className="w-8 h-8 text-primary rotate-90 animate-pulse" />
            </div>

            {/* Final Output */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-destructive flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <Card className="flex-1 border-primary/50 bg-gradient-to-br from-primary/5 via-accent/5 to-destructive/5">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-foreground">Output: Clinical Report</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Total: ~19s
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Comprehensive stroke risk assessment with interactive 3D visualization and clinical
                      recommendations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Visualization Dashboard</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>3D vascular reconstruction with full rotation/zoom</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Color-coded hemodynamic maps (velocity, pressure, WSS)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Highlighted high-risk regions with annotations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Pulsatile flow animations and streamlines</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Clinical Insights</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Overall stroke risk score (0-100)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Quantitative hemodynamic biomarkers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Identified pathologies (aneurysm, stenosis)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span>Evidence-based clinical recommendations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">~19s</p>
                <p className="text-sm text-muted-foreground">Total Processing Time</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">3</p>
                <p className="text-sm text-muted-foreground">AI Models in Pipeline</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-destructive/10 to-transparent border-destructive/30">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-destructive mb-2">89%</p>
                <p className="text-sm text-muted-foreground">Risk Prediction Accuracy</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">1000×</p>
                <p className="text-sm text-muted-foreground">Faster than Traditional CFD</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
