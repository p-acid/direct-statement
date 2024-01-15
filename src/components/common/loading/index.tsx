import { HTMLAttributes } from "react"

import "./style.css"

import { cn } from "@/lib/utils"

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  text?: string
}

const Loading = ({ text, className, ...rest }: LoadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6",
        className
      )}
      {...rest}
    >
      <div className="loader" />
      {text ? <p className="text-sm font-thin">{text}</p> : null}
    </div>
  )
}

export default Loading
