"use client"

import { useRouter } from "next/navigation"

import { signOut } from "next-auth/react"

import { pageRoute } from "@/lib/page-route"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

interface MyAccountProps {
  name?: string
  thumbnail?: string
}

const MyAccount = ({ name, thumbnail }: MyAccountProps) => {
  const { push } = useRouter()
  const { toast } = useToast()

  const goMyPage = () => {
    push(pageRoute.myPage.base)
  }

  const onSignOut = () => {
    signOut()
    toast({
      title: "로그아웃 되었습니다!",
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="!cursor-pointer">
          <AvatarImage src={thumbnail} />
          <AvatarFallback>MY</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={goMyPage}>내 정보</DropdownMenuItem>
        <DropdownMenuItem onClick={onSignOut}>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MyAccount
