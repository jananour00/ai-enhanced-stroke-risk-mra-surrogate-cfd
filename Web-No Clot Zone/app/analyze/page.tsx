"use client"

import type React from "react"
import StrokeAnalysisPanel from "@/components/stroke-analysis-panel"
import { useState, useRef } from "react"
import { Upload, Loader2, CheckCircle, AlertCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BloodFlowVisualizer from "@/components/blood-flow-visualizer"

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDownloadSample = (filename: string) => {
    // Simulate download of sample MRA data
    const link = document.createElement("a")
    link.href = "#"
    link.download = filename
    link.click()
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFile(files[0])
      setUploaded(false)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setUploaded(true)
    setUploading(false)
  }

  const handleAnalyze = async () => {
    setAnalyzing(true)
    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setAnalyzed(true)
    setAnalyzing(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
            MRA Analysis <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Upload your MRA scan and let our AI analyze your cerebrovascular health in real-time.
          </p>

          <div className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Download className="w-6 h-6 text-primary" />
                  Try with Sample Data
                </h2>
                <p className="text-muted-foreground mb-4">
                  Download pre-processed MRA scans with known aneurysms and stenosis to test the complete AI pipeline.
                  Perfect for understanding the analysis workflow before uploading your own data.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadSample("sample_aneurysm_mca.nii")}
                    className="justify-start"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    MCA Aneurysm (47MB)
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadSample("sample_stenosis_ica.nii")}
                    className="justify-start"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    ICA Stenosis (52MB)
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadSample("sample_normal_coa.nii")}
                    className="justify-start"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Normal Vessel (38MB)
                  </Button>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-sm space-y-2 max-w-xs">
                <h3 className="font-semibold text-foreground">Sample Data Info</h3>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li>• Format: NIfTI (.nii)</li>
                  <li>• Resolution: 0.5mm isotropic</li>
                  <li>• Sequence: TOF-MRA</li>
                  <li>• Anonymized clinical data</li>
                  <li>• Validated ground truth</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Upload & Control Section */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Step 1: Upload MRA Scan</h2>

                <div
                  className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center cursor-pointer hover:border-primary/60 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Drop your MRA scan here</h3>
                  <p className="text-muted-foreground text-sm mb-4">Supported formats: .nii, .dcm (up to 500MB)</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".nii,.dcm,application/octet-stream"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>

                {file && (
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleUpload}
                  disabled={!file || uploading || uploaded}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : uploaded ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Uploaded
                    </>
                  ) : (
                    "Upload Scan"
                  )}
                </Button>
              </div>

              {/* Analysis Section */}
              <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Step 2: Run Analysis</h2>
                <p className="text-muted-foreground">
                  Our AI will process your scan to identify vascular morphology, hemodynamic patterns, and risk regions.
                </p>

                <Button
                  onClick={handleAnalyze}
                  disabled={!uploaded || analyzing || analyzed}
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  {analyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing... (2-3 min)
                    </>
                  ) : analyzed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Analysis Complete
                    </>
                  ) : (
                    "Start Analysis"
                  )}
                </Button>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Analysis includes:</p>
                  <ul className="space-y-2 ml-4">
                    <li>✓ Vessel segmentation and 3D reconstruction</li>
                    <li>✓ Hemodynamic flow estimation</li>
                    <li>✓ Pressure and WSS mapping</li>
                    <li>✓ High-risk region identification</li>
                  </ul>
                </div>
              </div>

              {/* Results Summary */}
              {analyzed && (
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Analysis Results</h2>

                  <div className="bg-background rounded-lg p-4 border border-border space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Overall Risk Assessment</p>
                      <p className="text-2xl font-bold text-accent">MODERATE</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: "55%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Aneurysm Detected</p>
                        <p className="text-sm text-muted-foreground">5mm saccular aneurysm at MCA bifurcation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Flow Disturbance</p>
                        <p className="text-sm text-muted-foreground">Low WSS region indicating thrombus risk</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3D Visualization Section */}
            <div className="lg:col-span-2">
              {analyzed ? (
                <BloodFlowVisualizer />
              ) : (
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 min-h-96 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Ready for Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Upload and analyze your MRA scan to see 3D blood flow visualization here
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 3D Visualization - Full Width */}
          {analyzed && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">3D Blood Flow Visualization</h2>
              <BloodFlowVisualizer />
            </div>
          )}

          {/* Analysis Results - Full Width */}
          {analyzed && (
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Detailed Stroke Risk Analysis</h2>
              <StrokeAnalysisPanel />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
