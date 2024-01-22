import { Dayjs } from "dayjs"

export type ValueOf<T> = T[keyof T]

export const CalendarMonthDayType = {
  Previous: "previous",
  Current: "current",
  Next: "next",
} as const

export type CalendarDate = {
  monthDayType: ValueOf<keyof typeof CalendarMonthDayType>
  date: Dayjs
}
