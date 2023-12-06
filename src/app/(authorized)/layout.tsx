import { ReactNode } from "react"
import { redirect } from "next/navigation"

import { pageRoute } from "@/lib/page-route"

import { getServerAccount } from "../api/auth/action"
import Navigation from "./src/ui/navigation"

interface AuthorizedLayoutProps {
  children: ReactNode
}

const AuthorizedLayout = async ({ children }: AuthorizedLayoutProps) => {
  const account = await getServerAccount()

  if (!account) {
    redirect(pageRoute.signIn)
  }

  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default AuthorizedLayout
