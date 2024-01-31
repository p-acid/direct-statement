import { ReactNode } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { getServerAccount } from "@/app/api/auth/action"

import MyPageBox from "./src/ui/box"

interface MyPageLayoutProps {
  children: ReactNode
}

const MyPageLayout = async ({ children }: MyPageLayoutProps) => {
  const account = await getServerAccount()

  return (
    <div className="flex flex-col gap-3 p-5">
      <MyPageBox className="items-center justify-center gap-6 py-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src={account?.user.thumbnail} />
          <AvatarFallback>{account?.user.name}</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-center text-lg font-normal">
            {account?.user.name}
          </p>
          <p className="text-sm font-extralight text-zinc-400">
            {account?.user.email}
          </p>
        </div>
      </MyPageBox>

      <Separator />

      <div>{children}</div>
    </div>
  )
}

export default MyPageLayout
