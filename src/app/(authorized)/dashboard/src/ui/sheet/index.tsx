import { ReactNode } from "react"

import {
  AtSign,
  Building,
  CalendarPlus,
  ClipboardCopy,
  FileSpreadsheet,
  LucideIcon,
  PenSquare,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface SheetBadgeProps {
  children: ReactNode
  icon: LucideIcon
}

const SheetBadge = ({ children, icon: SheetBadgeIcon }: SheetBadgeProps) => (
  <Badge className="flex gap-[6px] px-3 font-light" variant="outline">
    <SheetBadgeIcon className="w-3 text-emerald-300" />
    {children}
  </Badge>
)

const DashboardSheet = () => {
  return (
    <Card className="cursor-pointer">
      <CardHeader className="flex flex-col gap-3 space-y-0">
        <div className="flex items-center gap-3">
          <Building className="h-10 w-10 rounded-full bg-emerald-950 p-[10px]" />

          <div>
            <p className="text-lg font-medium text-zinc-100">일산하이테크</p>
            <div className="flex items-center gap-[6px] text-xs text-zinc-200">
              <CalendarPlus className="w-[14px]" />
              최근 발행 <p className="text-zinc-400">2023년 12월 06일</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-[6px]">
          <SheetBadge icon={FileSpreadsheet}>3건의 명세서</SheetBadge>
          <SheetBadge icon={AtSign}>omhightech13@naver.com</SheetBadge>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="flex gap-2 p-5">
        <Button className="flex w-full gap-[6px]" size="sm">
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

export default DashboardSheet
