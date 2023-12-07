import type { Metadata } from "next"
import { Inter } from "next/font/google"

import EdgeStoreProvider from "@/provider/edge-provider"
import { TanstackProviders } from "@/provider/query-provider"
import SessionProvider from "@/provider/session-provider"
import { ThemeProvider } from "@/provider/theme-provider"

import "@/styles/global.css"

import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Easy Tax",
  description: "Manage your tax statement by web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <EdgeStoreProvider>
          <TanstackProviders>
            <SessionProvider>
              <ThemeProvider>
                <>
                  {children}
                  <Toaster />
                </>
              </ThemeProvider>
            </SessionProvider>
          </TanstackProviders>
        </EdgeStoreProvider>
      </body>
    </html>
  )
}
