"use client"

import { useState } from "react"

import dayjs from "dayjs"

import Days from "./days"
import Header from "./header"

import "./style.css"

const DashboardCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs)

  return (
    <div>
      <Header date={currentDate} setDate={setCurrentDate} />
      <Days date={currentDate} />
    </div>
  )
}

export default DashboardCalendar
