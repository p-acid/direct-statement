import { Building2, Info, LucideIcon, ScrollText } from "lucide-react"

import { pageRoute } from "@/lib/page-route"

import MyPageLink from "./src/ui/link"

const MyPageMain = () => {
  return (
    <div className="flex gap-3 max-sm:flex-col">
      {myPageRoutes.map(({ title, href, icon: Icon }) => (
        <MyPageLink href={href}>
          <Icon className="w-5" />
          {title}
        </MyPageLink>
      ))}
    </div>
  )
}

export default MyPageMain

const myPageRoutes: { title: string; href: string; icon: LucideIcon }[] = [
  {
    title: "사업자 정보",
    href: pageRoute.myPage.business,
    icon: Info,
  },
  {
    title: "나의 거래처",
    href: pageRoute.myPage.company,
    icon: Building2,
  },
  {
    title: "나의 세금명세서",
    href: pageRoute.myPage.taxStatement,
    icon: ScrollText,
  },
]
