"use client"

import { HTMLAttributes } from "react"
import { useRouter } from "next/navigation"

import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import MyPageBox from "./box"

interface MyPageLinkProps extends HTMLAttributes<HTMLElement> {
  href: string
}

const MyPageLink = ({ children, className, href }: MyPageLinkProps) => {
  const { push } = useRouter()

  return (
    <MyPageBox
      className={cn("flex-row justify-between px-5 text-sm", className)}
      onClick={() => push(href)}
    >
      <div className="flex items-center gap-3">{children}</div>
      <ChevronRight className="w-5" />
    </MyPageBox>
  )
}

export default MyPageLink
