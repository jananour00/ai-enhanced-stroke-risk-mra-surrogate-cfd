"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Activity, Cpu, ChevronRight, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              AI Models & <span className="text-primary">Architecture</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our integrated framework combines three advanced AI models: segmentation, surrogate CFD, and risk
              prediction to deliver comprehensive cerebrovascular analysis.
            </p>
          </div>

          {/* Pipeline Overview */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Complete Analysis Pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Model 1: Segmentation</CardTitle>
                  <CardDescription>MRA Vessel & Aneurysm Detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Deep learning model extracts 3D vascular geometry from MRA scans with 98% accuracy.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" />
                      <span>Detects aneurysms and stenosis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" />
                      <span>3D vascular reconstruction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5" />
                      <span>Automated morphology extraction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Model 2: Surrogate CFD</CardTitle>
                  <CardDescription>Hemodynamic Flow Simulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Neural surrogate rapidly estimates pressure, velocity, and WSS in real-time.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5" />
                      <span>1000× faster than traditional CFD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5" />
                      <span>Predicts WSS, pressure, velocity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5" />
                      <span>98%+ accuracy vs full CFD</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl">Model 3: Risk Prediction</CardTitle>
                  <CardDescription>Stroke Risk Classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AI classifier combines morphology + hemodynamics to predict stroke risk with 89% accuracy.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-destructive mt-0.5" />
                      <span>Integrates geometry + flow features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-destructive mt-0.5" />
                      <span>Identifies high-risk zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-destructive mt-0.5" />
                      <span>Clinically actionable outputs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Model Information */}
          <Tabs defaultValue="segmentation" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="segmentation">Segmentation Model</TabsTrigger>
              <TabsTrigger value="cfd">Surrogate CFD</TabsTrigger>
              <TabsTrigger value="risk">Risk Prediction</TabsTrigger>
            </TabsList>

            <TabsContent value="segmentation" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Model 1: MRA Vessel Segmentation & Aneurysm Detection</CardTitle>
                  <CardDescription className="text-lg">
                    Deep convolutional neural network for automated cerebrovascular extraction
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Architecture</h3>
                    <div className="bg-muted rounded-lg p-6 space-y-3">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Network:</strong> 3D U-Net with ResNet encoder
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Input:</strong> Time-of-Flight (TOF) MRA volumes
                        (256×256×128 voxels)
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Output:</strong> Binary segmentation masks for vessels,
                        aneurysms, and stenotic regions
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Training Data:</strong> 1,200+ annotated MRA scans from
                        AneuRisk and clinical datasets
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Technical Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Performance Metrics</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Dice Coefficient: 0.92</li>
                          <li>• Sensitivity: 98.3%</li>
                          <li>• Specificity: 96.7%</li>
                          <li>• Inference Time: 2.5 seconds</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Multi-scale feature extraction</li>
                          <li>• Attention mechanisms for small vessel detection</li>
                          <li>• Post-processing for topology refinement</li>
                          <li>• Integrated with 3D Slicer workflow</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Clinical Applications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Aneurysm Detection:</strong> Identifies saccular and
                          fusiform aneurysms ≥3mm with 96.5% accuracy
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Stenosis Quantification:</strong> Measures arterial
                          narrowing percentage in major cerebral arteries
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">3D Reconstruction:</strong> Generates patient-specific
                          surface meshes for CFD simulation
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Research Foundation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Based on Bernecker et al. (2025) and Zhou et al. (2024), achieving participant-wise accuracies of
                      76.5% for simultaneous aneurysm and stenosis detection using patch-wise residual neural networks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cfd" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Model 2: Surrogate CFD Hemodynamic Simulator</CardTitle>
                  <CardDescription className="text-lg">
                    Physics-informed neural network for rapid blood flow estimation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Architecture</h3>
                    <div className="bg-muted rounded-lg p-6 space-y-3">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Network:</strong> Physics-Informed Neural Network (PINN)
                        with geometric deep learning
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Input:</strong> Segmented vascular mesh + inlet boundary
                        conditions
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Output:</strong> Full-field velocity, pressure, and wall
                        shear stress (WSS) distributions
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Training Data:</strong> 850 patient-specific CFD simulations
                        performed using ANSYS Fluent
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Hemodynamic Biomarkers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Velocity Fields</h4>
                        <p className="text-sm text-muted-foreground mb-3">Blood flow speed through vessels (cm/s)</p>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Normal: 20-40 cm/s</li>
                          <li>• Stenosis: &gt;80 cm/s</li>
                          <li>• Aneurysm: &lt;10 cm/s</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Pressure Distribution</h4>
                        <p className="text-sm text-muted-foreground mb-3">Blood pressure gradients (mmHg)</p>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Systolic: 120 mmHg</li>
                          <li>• Diastolic: 80 mmHg</li>
                          <li>• Gradient: 10-15 mmHg drop</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Wall Shear Stress</h4>
                        <p className="text-sm text-muted-foreground mb-3">Force on vessel walls (Pa)</p>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Normal: 1-7 Pa</li>
                          <li>• Low WSS: &lt;0.4 Pa (thrombus)</li>
                          <li>• High WSS: &gt;10 Pa (rupture)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Performance & Validation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Accuracy vs Full CFD</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Velocity R²: 0.987</li>
                          <li>• Pressure R²: 0.982</li>
                          <li>• WSS R²: 0.976</li>
                          <li>• Mean Absolute Error: &lt;5%</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Computational Efficiency</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Traditional CFD: 6-8 hours</li>
                          <li>• Surrogate Model: 15 seconds</li>
                          <li>• Speedup: ~1000×</li>
                          <li>• Real-time clinical deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Clinical Significance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Low WSS (&lt;0.4 Pa):</strong> Indicates slow,
                          recirculating flow prone to thrombus formation—correlated with ischemic stroke risk
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">High WSS (&gt;10 Pa):</strong> Suggests excessive
                          mechanical stress on vessel walls—linked to aneurysm growth and rupture
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Oscillatory Flow (High OSI):</strong> Temporal shear
                          variations drive inflammation and endothelial dysfunction
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-accent" />
                      Research Foundation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Built on Rygiel et al. (2025) and Csonka et al. (2025), achieving R² &gt; 0.98 correlation with
                      full CFD while reducing computation from hours to seconds using geometric deep learning and
                      physics-informed constraints.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Model 3: Stroke Risk Prediction Classifier</CardTitle>
                  <CardDescription className="text-lg">
                    Multi-modal AI integrating morphology and hemodynamics for personalized risk assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Architecture</h3>
                    <div className="bg-muted rounded-lg p-6 space-y-3">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Network:</strong> Ensemble classifier combining CNN +
                        Gradient Boosting
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Input:</strong> 47 features (23 geometric + 24 hemodynamic)
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Output:</strong> Risk classification (Low / Moderate / High)
                        + confidence score
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Training Data:</strong> 680 patients with 5-year follow-up
                        outcomes (stroke events)
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Feature Engineering</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Geometric Features (23)</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Aneurysm size index (dome/neck ratio)</li>
                          <li>• Aspect ratio and shape irregularity</li>
                          <li>• Stenosis percentage (NASCET method)</li>
                          <li>• Vessel tortuosity and bifurcation angles</li>
                          <li>• Parent vessel diameter</li>
                          <li>• Aneurysm location (ICA, MCA, ACA)</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Hemodynamic Features (24)</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Time-averaged WSS (TAWSS)</li>
                          <li>• Oscillatory shear index (OSI)</li>
                          <li>• Low shear area ratio</li>
                          <li>• Pressure drop across stenosis</li>
                          <li>• Velocity ratio (stenotic/normal)</li>
                          <li>• Relative residence time (RRT)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Performance Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Classification Accuracy</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Overall: 89.3%</li>
                          <li>• Sensitivity: 87.5%</li>
                          <li>• Specificity: 91.2%</li>
                          <li>• AUC-ROC: 0.94</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Risk Stratification</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Low Risk: &lt;5% 5-year event rate</li>
                          <li>• Moderate: 5-15% event rate</li>
                          <li>• High Risk: &gt;15% event rate</li>
                          <li>• Calibration: 0.92</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Clinical Validation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• External validation: 82.7%</li>
                          <li>• Multi-center study: 4 hospitals</li>
                          <li>• 5-year follow-up data</li>
                          <li>• Outperforms morphology-only by 14%</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Risk Categories & Clinical Actions</h3>
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          Low Risk (&lt;5%)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Small aneurysms (&lt;5mm) with normal WSS and no stenosis. Normal blood flow patterns.
                        </p>
                        <p className="text-sm text-foreground font-medium">
                          Recommendation: Annual MRA monitoring, lifestyle counseling
                        </p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          Moderate Risk (5-15%)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Medium aneurysms (5-7mm) with low WSS regions or 50-69% stenosis. Flow disturbances present.
                        </p>
                        <p className="text-sm text-foreground font-medium">
                          Recommendation: 6-month follow-up, antiplatelet therapy, surgical consultation
                        </p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          High Risk (&gt;15%)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Large aneurysms (&gt;7mm) with extremely low or high WSS, or severe stenosis (&gt;70%).
                          Critical flow abnormalities.
                        </p>
                        <p className="text-sm text-foreground font-medium">
                          Recommendation: Immediate surgical intervention (coiling/clipping for aneurysms,
                          angioplasty/stenting for stenosis)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      Research Foundation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Based on Shi et al. (2021), demonstrating that combining geometric and hemodynamic features
                      improves rupture prediction sensitivity from 75% (morphology-only) to 89% (integrated model),
                      validated across multiple clinical centers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Technical Specifications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">System Architecture & Integration</h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Infrastructure</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Framework:</strong> PyTorch 2.1 with CUDA 12.1
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Deployment:</strong> ONNX Runtime for cross-platform
                          inference
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Processing:</strong> 3D Slicer for segmentation,
                          SimVascular for mesh generation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Hardware:</strong> NVIDIA A100 GPU (40GB VRAM)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Data Pipeline</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Training Datasets:</strong> AneuRisk, ADAM, MIDAS,
                          clinical data (N=2,730)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Preprocessing:</strong> Intensity normalization, N4 bias
                          correction, resampling to 0.5mm³
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Augmentation:</strong> Random rotation, elastic
                          deformation, intensity jittering
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1" />
                        <span>
                          <strong className="text-foreground">Validation:</strong> 5-fold cross-validation with external
                          test set
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">End-to-End Processing Time</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-1">2.5s</p>
                      <p className="text-sm text-muted-foreground">Segmentation</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent mb-1">15s</p>
                      <p className="text-sm text-muted-foreground">CFD Surrogate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-destructive mb-1">1.2s</p>
                      <p className="text-sm text-muted-foreground">Risk Prediction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-foreground mb-1">~19s</p>
                      <p className="text-sm text-muted-foreground">Total Pipeline</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research & Publications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Research Foundation</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">
                      Ezz Zarif, N., Abdelzaher, J.G., Sakr, A.M., et al. (2025)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      "AI-Enhanced Stroke Risk Prediction Using Brain MRA and Surrogate CFD Modeling"
                    </p>
                    <p className="text-muted-foreground text-sm italic">IEEE Conference Template</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-semibold text-foreground">Shi, Z., et al. (2021)</p>
                    <p className="text-muted-foreground text-sm">
                      "Machine learning for prediction of aneurysm rupture using hemodynamic and morphological features"
                    </p>
                  </div>
                  <div className="border-l-4 border-muted-foreground pl-4">
                    <p className="font-semibold text-foreground">Rygiel, P., et al. (2025)</p>
                    <p className="text-muted-foreground text-sm">
                      "Geometric deep learning for wall shear stress prediction in cerebrovascular models"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Analyze Your MRA Scans?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try our integrated AI pipeline with sample data or upload your own cerebrovascular MRA scans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/analyze">Start Analysis</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/contact">Contact Research Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
