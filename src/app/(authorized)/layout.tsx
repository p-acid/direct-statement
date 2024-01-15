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
    <main>
      <Navigation />
      <section className="mx-auto w-full max-w-[650px] p-6">{children}</section>
    </main>
  )
}

export default AuthorizedLayout
