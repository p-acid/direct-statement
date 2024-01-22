import dayjs, { Dayjs } from "dayjs"

import { CalendarDate, CalendarMonthDayType, ValueOf } from "@/types/calendar"

/**
 * 인자로 전달된 년/월에 해당하는 마지막 날짜를 구하는 유틸 함수
 * @param year 특정 연도
 * @param month 특정 월 (1부터 시작)
 */
const getLastDate = (year: number, month: number): number =>
  new Date(year, month, 0).getDate()

/**
 * 인자로 전달된 년/월에 해당하는 Date 객체 리스트를 구하는 유틸 함수
 * @param count 객체 리스트 갯수
 * @param year 특정 연도
 * @param month 특정 월 (1부터 시작)
 * @param startDate 시작일
 */
const getDateList = (
  count: number,
  year: number,
  month: number,
  startDate = 0
): Dayjs[] =>
  Array.from({ length: count }).map((_v, index) =>
    dayjs(new Date(year, month - 1, startDate + index + 1))
  )

/**
 * Date 배열을 CalendarDate 배열로 변환하는 함수
 * @param 캘린더 타입을 의미
 */
const getCalendarDateList = (
  dateList: Dayjs[],
  monthDayType: ValueOf<typeof CalendarMonthDayType>
) => dateList.map((date) => ({ date, monthDayType }))

/**
 * 인자로 전달된 년/월에 해당하는 달력 날짜 리스트를 구하는 유틸 함수
 * @param year 특정 연도
 * @param month 특정 월 (1부터 시작)
 */
export const getCalendarList = (
  year: number,
  month: number
): CalendarDate[][] => {
  const WEEK = 7

  const firstWeekDay = new Date(year, month - 1).getDay()
  const lastWeekDay = new Date(year, month, 0).getDay()
  const previousMonthLastDate = getLastDate(year, month - 1)
  const thisMonthLastDate = getLastDate(year, month)

  const nextMonthRestCount = WEEK - lastWeekDay - 1

  const previousMonthDateList = getDateList(
    firstWeekDay,
    year,
    month - 1,
    previousMonthLastDate - firstWeekDay
  )
  const thisMonthDateList = getDateList(thisMonthLastDate, year, month)
  const otherDateListLength = [...previousMonthDateList, ...thisMonthDateList]
    .length
  const nextMonthDateList = getDateList(
    otherDateListLength > WEEK * 5
      ? nextMonthRestCount
      : nextMonthRestCount +
          Math.floor((WEEK * 6 - otherDateListLength) / WEEK) * WEEK,
    year,
    month + 1
  )

  const calendarDateList = [
    ...getCalendarDateList(
      previousMonthDateList,
      CalendarMonthDayType.Previous
    ),
    ...getCalendarDateList(thisMonthDateList, CalendarMonthDayType.Current),
    ...getCalendarDateList(nextMonthDateList, CalendarMonthDayType.Next),
  ]

  return Array.from({ length: calendarDateList.length / WEEK }).map(
    (_v, index) => calendarDateList.slice(WEEK * index, WEEK * (index + 1))
  )
}
