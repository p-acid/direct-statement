import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

const MyPageBox = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col rounded-xl bg-zinc-900 p-4", className)}
    {...rest}
  >
    {children}
  </div>
)

export default MyPageBox
