import { ArrowRight, Cpu, Microscope, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />

      {/* Hero */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Advanced Technology Behind <span className="text-primary">Precision Care</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            NO CLOT ZONE integrates three pioneering technologies to deliver unparalleled stroke risk assessment.
          </p>
        </div>
      </section>

      {/* MRA Section */}
      <section className="px-4 py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Magnetic Resonance Angiography (MRA)</h2>
              <p className="text-lg text-muted-foreground">
                MRA provides high-resolution 3D imaging of blood vessels without ionizing radiation. Our platform
                supports standard medical formats (.nii, .dcm) for seamless integration into clinical workflows.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Microscope className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Automated Segmentation</h4>
                    <p className="text-muted-foreground text-sm">Rapid vessel extraction and boundary detection</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Cpu className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">3D Reconstruction</h4>
                    <p className="text-muted-foreground text-sm">Patient-specific vascular tree generation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Real-time Processing</h4>
                    <p className="text-muted-foreground text-sm">Results delivered in seconds, not hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <Microscope className="w-24 h-24 text-primary mx-auto opacity-60" />
                <p className="text-muted-foreground mt-4">MRA Volume Rendering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFD Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Cpu className="w-24 h-24 text-accent mx-auto opacity-60" />
                <p className="text-muted-foreground mt-4">Hemodynamic Simulation</p>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Surrogate CFD Modeling</h2>
              <p className="text-lg text-muted-foreground">
                Computational Fluid Dynamics (CFD) models blood flow physics within reconstructed vessels. Our surrogate
                model provides fast, accurate hemodynamic estimates without expensive full simulations.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold flex-shrink-0">
                    P
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Pressure Estimation</h4>
                    <p className="text-muted-foreground text-sm">
                      Identifies high-pressure regions correlating with rupture risk
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold flex-shrink-0">
                    V
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Velocity Mapping</h4>
                    <p className="text-muted-foreground text-sm">
                      Reveals flow acceleration, recirculation, and disturbance zones
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold flex-shrink-0">
                    W
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Wall Shear Stress</h4>
                    <p className="text-muted-foreground text-sm">
                      Indicates thrombus formation and aneurysm growth potential
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Learning Section */}
      <section className="px-4 py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Deep Learning Risk Assessment</h2>
              <p className="text-lg text-muted-foreground">
                Our deep learning model integrates morphological features from MRA with hemodynamic biomarkers from CFD
                to identify high-risk regions with clinical precision.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Multi-modal Feature Analysis</h4>
                  <p className="text-muted-foreground text-sm">
                    Combines vessel geometry, flow patterns, and pressure dynamics for comprehensive risk profiling
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">High-Risk Region Detection</h4>
                  <p className="text-muted-foreground text-sm">
                    Automatically highlights aneurysms, stenotic zones, and flow-disturbed environments
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Clinical Validation</h4>
                  <p className="text-muted-foreground text-sm">
                    Model trained on extensive clinical datasets for reliable, interpretable predictions
                  </p>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <Zap className="w-24 h-24 text-primary mx-auto opacity-60" />
                <p className="text-muted-foreground mt-4">AI-Powered Risk Identification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Workflow */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Integrated Clinical Workflow</h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "MRA Upload",
                desc: "Upload volumetric scans in .nii or .dcm format with automatic metadata extraction",
              },
              {
                step: "2",
                title: "Vessel Segmentation",
                desc: "Automated extraction of vascular tree from MRA imagery",
              },
              { step: "3", title: "3D Reconstruction", desc: "Generation of patient-specific vascular geometry" },
              {
                step: "4",
                title: "CFD Surrogate Inference",
                desc: "Fast hemodynamic estimation producing velocity, pressure, and WSS maps",
              },
              {
                step: "5",
                title: "Deep Learning Analysis",
                desc: "AI identification of high-risk regions from morphology + hemodynamics",
              },
              {
                step: "6",
                title: "Clinical Report",
                desc: "Comprehensive visualization and insights for clinical decision-making",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 md:py-24 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Experience Advanced Assessment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our integrated technology delivers clinical-grade stroke risk assessment in minutes.
          </p>
          <Link href="/analyze">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Launch Analysis <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
