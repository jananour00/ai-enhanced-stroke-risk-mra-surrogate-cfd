import { CheckCircle2, Zap, Brain, BarChart3, Eye, Share2 } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "3D Vascular Reconstruction",
      description:
        "Interactive exploration of patient-specific vessel anatomy with full rotation, zoom, and transparency controls for detailed inspection.",
    },
    {
      icon: Zap,
      title: "Real-time Hemodynamic Mapping",
      description:
        "Color-coded velocity, pressure, and wall shear stress visualizations providing immediate clinical insights into flow patterns.",
    },
    {
      icon: Eye,
      title: "Automated Risk Highlighting",
      description:
        "AI-identified high-risk regions including aneurysm sacs, stenotic zones, and disturbed flow areas highlighted on the 3D model.",
    },
    {
      icon: BarChart3,
      title: "Advanced Measurement Tools",
      description:
        "Measure vessel diameters, aneurysm dimensions, stenosis percentages, and affected segment lengths directly from visualizations.",
    },
    {
      icon: Brain,
      title: "Medical Slice Viewer",
      description:
        "Axial, coronal, and sagittal views with comparison between original scans and segmentation masks at pixel-level precision.",
    },
    {
      icon: Share2,
      title: "Clinical-Grade Reporting",
      description:
        "Comprehensive reports combining morphological and hemodynamic data for personalized cerebrovascular risk assessment.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-center leading-tight">
            Powerful Features for <span className="text-primary">Clinical Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Comprehensive tools designed to streamline stroke risk assessment and support evidence-based clinical
            decision-making.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20 space-y-8">
            <h2 className="text-4xl font-bold text-foreground text-center">How We Compare</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">NO CLOT ZONE</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Traditional Imaging</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "3D Vessel Reconstruction", us: true, them: false },
                    { feature: "Hemodynamic Analysis", us: true, them: false },
                    { feature: "Risk Prediction AI", us: true, them: false },
                    { feature: "Wall Shear Stress Mapping", us: true, them: false },
                    { feature: "Flow Visualization", us: true, them: false },
                    { feature: "Automated Reporting", us: true, them: false },
                    { feature: "Real-time Processing", us: true, them: false },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4 px-4 text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle2
                          className={`w-5 h-5 mx-auto ${row.us ? "text-accent" : "text-muted-foreground opacity-30"}`}
                        />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle2
                          className={`w-5 h-5 mx-auto ${row.them ? "text-muted-foreground" : "text-muted-foreground opacity-30"}`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
