"use client"

import Link from "next/link"
import { ArrowRight, Heart, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Advanced Cerebrovascular Assessment
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Predict Strokes <span className="text-primary">Before They Strike</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Combining MRA imaging, AI-powered CFD simulation, and deep learning to deliver cerebrovascular stroke
                risk assessment in under 20 seconds—1000× faster than traditional methods.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/analyze">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Analysis <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/technology">
                  <Button size="lg" variant="outline">
                    Learn Technology
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Brain className="w-24 h-24 text-primary mx-auto opacity-80" />
                <p className="text-muted-foreground">3D Vascular Reconstruction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">The Problem We Solve</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Leading Cause of Death",
                description:
                  "Stroke remains one of the leading causes of death and disability worldwide, often linked to undetected cerebral aneurysms or arterial stenosis.",
              },
              {
                icon: Brain,
                title: "Incomplete Diagnostics",
                description:
                  "Traditional imaging focuses only on vascular morphology, neglecting critical hemodynamic alterations that influence stroke risk.",
              },
              {
                icon: Zap,
                title: "Delayed Detection",
                description:
                  "Current methods lack speed and automation, delaying early intervention for at-risk patients.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">Our AI-Powered Solution</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            Three integrated AI models work together to transform MRA scans into actionable stroke risk predictions in
            real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  num: "1",
                  title: "Vessel Segmentation (2.5s)",
                  desc: "3D U-Net extracts cerebrovascular anatomy from MRA scans with 98% accuracy, identifying aneurysms and stenosis automatically.",
                },
                {
                  num: "2",
                  title: "CFD Surrogate Modeling (15s)",
                  desc: "Physics-informed neural network computes hemodynamic biomarkers—velocity, pressure, and wall shear stress—1000× faster than traditional CFD.",
                },
                {
                  num: "3",
                  title: "Risk Prediction (1.5s)",
                  desc: "Ensemble AI classifier combines morphology + hemodynamics to predict stroke risk with 89% accuracy and highlights high-risk zones.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border border-primary/20 flex flex-col items-center justify-center p-8">
              <Zap className="w-24 h-24 text-accent mx-auto opacity-80 mb-6" />
              <p className="text-3xl font-bold text-center text-foreground mb-2">~19 Seconds</p>
              <p className="text-muted-foreground text-center text-lg">From MRA scan to clinical report</p>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">vs. Traditional CFD</p>
                <p className="text-2xl font-bold text-primary">1000× Faster</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/workflow">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                See Detailed Workflow <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="px-4 py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Platform Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-time 3D Visualization",
                desc: "Interactive vascular reconstruction with full rotation, zoom, and transparency controls.",
              },
              {
                title: "Hemodynamic Mapping",
                desc: "Color-coded velocity, pressure, and WSS visualizations for complete flow assessment.",
              },
              {
                title: "Risk Highlighting",
                desc: "Automatically identifies and highlights aneurysms, stenosis, and disturbed flow regions.",
              },
              {
                title: "Clinical Tools",
                desc: "Slice viewer, measurement tools, and flow animations for detailed examination.",
              },
              {
                title: "Medical Format Support",
                desc: "Native support for .nii and .dcm formats with metadata extraction.",
              },
              {
                title: "Personalized Reports",
                desc: "Comprehensive risk assessment supporting personalized cerebrovascular intervention.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Transform Cerebrovascular Care?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join clinicians and researchers using NO CLOT ZONE for early stroke detection and personalized risk
            assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/analyze">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Analysis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
