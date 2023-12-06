"use client"

import { signOut } from "next-auth/react"

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

  return <Button onClick={onSignOut}>로그아웃</Button>
}

export default Navigation
