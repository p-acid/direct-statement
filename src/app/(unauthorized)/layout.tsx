import { ReactNode } from "react"
import { redirect } from "next/navigation"

import { pageRoute } from "@/lib/page-route"

import { getServerAccount } from "../api/auth/action"

interface UnauthorizedLayoutProps {
  children: ReactNode
}

const UnauthorizedLayout = async ({ children }: UnauthorizedLayoutProps) => {
  const account = await getServerAccount()

  if (account) {
    redirect(pageRoute.dashboard)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 transition-colors">
      {children}
    </main>
  )
}

export default UnauthorizedLayout
