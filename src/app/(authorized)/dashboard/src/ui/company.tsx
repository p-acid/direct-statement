import { ReactNode } from "react"
import { useRouter } from "next/navigation"

import dayjs from "dayjs"
import {
  AtSign,
  Building,
  CalendarPlus,
  ClipboardCopy,
  FileSpreadsheet,
  LucideIcon,
  PenSquare,
} from "lucide-react"

import { pageRoute } from "@/lib/page-route"
import { cn, getDynamicRoute } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface SheetBadgeProps {
  children: ReactNode
  icon: LucideIcon
  active?: boolean
}

const SheetBadge = ({
  children,
  icon: SheetBadgeIcon,
  active,
}: SheetBadgeProps) => (
  <Badge className="flex gap-[6px] px-3 font-light" variant="outline">
    <SheetBadgeIcon
      className={cn("w-3 text-emerald-300", {
        "text-zinc-500": !active,
      })}
    />
    {children}
  </Badge>
)

interface DashboardCompanyProps {
  name: string
  statementCount: number
  email: string | null
  lastPublicationDate?: string
  onClickWrite: () => void
}

const DashboardCompany = ({
  name,
  statementCount,
  email,
  lastPublicationDate,
  onClickWrite,
}: DashboardCompanyProps) => {
  const hasStatement = statementCount > 0
  const hasEmail = !!email

  return (
    <Card className="cursor-pointer">
      <CardHeader className="flex flex-col gap-3 space-y-0">
        <div className="flex items-center gap-3">
          <Building className="h-10 w-10 rounded-full bg-emerald-950 p-[10px]" />

          <div>
            <p className="text-lg font-medium text-zinc-100">{name}</p>
            <div className="flex items-center gap-[6px] text-xs text-zinc-200">
              <CalendarPlus className="w-[14px]" />
              최근 발행
              <p className="text-zinc-400">
                {lastPublicationDate
                  ? dayjs(lastPublicationDate).format("YYYY년 MM월 DD일")
                  : "이력 없음"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-[6px]">
          <SheetBadge active={hasStatement} icon={FileSpreadsheet}>
            {hasStatement ? `${statementCount}건의 명세서` : "명세서 없음"}
          </SheetBadge>

          <SheetBadge active={hasEmail} icon={AtSign}>
            {hasEmail ? email : "이메일 없음"}
          </SheetBadge>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="flex gap-2 p-5">
        <Button
          className="flex w-full gap-[6px]"
          size="sm"
          onClick={onClickWrite}
        >
          <PenSquare className="w-4" />
          작성하기
        </Button>
        <Button className="flex w-full gap-[6px]" size="sm" variant="outline">
          <ClipboardCopy className="w-4" />
          메일 주소 복사
        </Button>
      </CardContent>
    </Card>
  )
}

export default DashboardCompany
