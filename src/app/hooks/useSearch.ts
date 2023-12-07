import { useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"

import { getDynamicRoute } from "@/lib/utils"

const useSearch = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  const setQuery = useCallback(
    (query: Record<string, string>) => {
      push(
        getDynamicRoute(pathname, {
          query,
        }),
        {
          scroll: false,
        }
      )
    },
    [pathname, push]
  )

  return { setQuery }
}

export default useSearch
