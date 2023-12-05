"use client"

import { FormEvent, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(inputRef?.current?.value)
  }

  return (
    <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
      <Input ref={inputRef} placeholder="Add keyword" />

      <Button type="submit">로그인</Button>
    </form>
  )
}

export default Form
