"use client"

import { useSearchParams } from "next/navigation"

const WriteStatement = () => {
  const searchParams = useSearchParams()

  console.log(searchParams.get("id"))

  return <div></div>
}

export default WriteStatement
