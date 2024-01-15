import { useMemo } from "react"

import { getCalendarList } from "@/utils/calendar"
import { Dayjs } from "dayjs"

import { CalendarMonthDayType } from "@/types/calendar"
import { cn } from "@/lib/utils"

const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"]

interface DaysProps {
  date: Dayjs
}

const Days = ({ date }: DaysProps) => {
  const year = date.get("year")
  const month = date.get("month") + 1

  const dateList = useMemo(() => getCalendarList(year, month), [year, month])

  return (
    <div>
      <div className="calendar-row">
        {DAY_LIST.map((day) => (
          <div key={`day-${day}`} className="calendar-cell justify-center">
            {day}
          </div>
        ))}
      </div>
      {dateList.map((week, index) => (
        <div className="calendar-row" key={`${year}-${month}-${index}`}>
          {week.map(({ date, monthDayType }) => {
            const dateString = String(date.get("date"))
            const isCurrentMonth = monthDayType === CalendarMonthDayType.Current

            return (
              <div
                key={`${year}-${month}-${index}-${date.get("d")}`}
                className={cn("calendar-cell h-20", {
                  "text-gray-500": !isCurrentMonth,
                })}
              >
                {dateString}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Days
