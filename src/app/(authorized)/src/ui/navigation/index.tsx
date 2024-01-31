import Link from "next/link"

import { pageRoute } from "@/lib/page-route"
import { getServerAccount } from "@/app/api/auth/action"

import MyAccount from "./my-account"

const Navigation = async () => {
  const account = await getServerAccount()

  return (
    <nav className="flex w-full items-center justify-between border-b border-zinc-800 px-6 py-4">
      <Link
        href={pageRoute.dashboard}
        className="animate-underline text-xl font-bold tracking-tighter"
      >
        EASY<strong className="text-green-400">TAX.</strong>
      </Link>

      <MyAccount
        name={account?.user.name}
        thumbnail={account?.user.thumbnail}
      />
    </nav>
  )
}

export default Navigation
