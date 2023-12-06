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

  return <div>{children}</div>
}

export default UnauthorizedLayout
