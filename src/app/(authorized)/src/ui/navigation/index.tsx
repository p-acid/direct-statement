"use client"

import Link from "next/link"

import { signOut } from "next-auth/react"

import { pageRoute } from "@/lib/page-route"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const Navigation = () => {
  const { toast } = useToast()

  const onSignOut = () => {
    signOut()
    toast({
      title: "로그아웃 되었습니다!",
    })
  }

  return (
    <nav className="flex w-full items-center justify-between border-b border-zinc-800 px-6 py-4">
      <Link
        href={pageRoute.dashboard}
        className="animate-underline text-xl font-bold tracking-tighter"
      >
        EASY<strong className="text-green-400">TAX.</strong>
      </Link>

      <Button variant="ghost" onClick={onSignOut}>
        로그아웃
      </Button>
    </nav>
  )
}

export default Navigation
