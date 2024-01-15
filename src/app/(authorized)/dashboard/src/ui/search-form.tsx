"use client"

import { FormEvent, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useSearch from "@/app/hooks/useSearch"

const DashboardSearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { setQuery } = useSearch()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!!inputRef?.current) {
      setQuery({
        keyword: inputRef?.current.value,
      })
    }
  }

  return (
    <form className="flex items-center gap-3" onSubmit={onSubmit}>
      <Input ref={inputRef} placeholder="검색어를 입력하세요." />
      <Button type="submit">검색</Button>
    </form>
  )
}

export default DashboardSearchForm
