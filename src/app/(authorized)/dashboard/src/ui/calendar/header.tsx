import { Dispatch, SetStateAction, useCallback } from "react"

import { Dayjs } from "dayjs"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HeaderProps {
  date: Dayjs
  setDate: Dispatch<SetStateAction<Dayjs>>
}

const Header = ({ date, setDate }: HeaderProps) => {
  const year = date.get("year")
  const month = date.get("month") + 1

  const handlePrevMonth = useCallback(
    () => setDate(date.subtract(1, "month")),
    [date, setDate]
  )

  const handleNextMonth = useCallback(
    () => setDate(date.add(1, "month")),
    [date, setDate]
  )

  return (
    <div className="flex items-center justify-between p-3 text-xl">
      <ChevronLeft className="cursor-pointer" onClick={handlePrevMonth} />
      <span>
        {year}년 {month}월
      </span>
      <ChevronRight className="cursor-pointer" onClick={handleNextMonth} />
    </div>
  )
}

export default Header
