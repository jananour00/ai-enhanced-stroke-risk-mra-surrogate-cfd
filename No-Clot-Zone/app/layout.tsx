import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NO CLOT ZONE - Stroke Risk Assessment Platform",
  description:
    "Advanced cerebrovascular risk evaluation using MRA imaging, CFD modeling, and deep learning for early stroke detection.",
  generator: "v0.app",
  icons: {
    icon: "/logo-no-clot-zone copy.png",
    apple: "/logo-no-clot-zone copy.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
