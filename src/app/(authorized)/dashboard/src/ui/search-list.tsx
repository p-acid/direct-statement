"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { useQuery } from "@/utils/tanstack"
import { Company } from "@prisma/client"

import { apiRoute } from "@/lib/api-route"
import api from "@/lib/axios/base"
import { pageRoute } from "@/lib/page-route"
import { getDynamicRoute } from "@/lib/utils"

import DashboardCompany from "./company"

const DashboardSearchList = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const keyword = searchParams.get("keyword")

  const { data: searchList } = useQuery<Company[]>({
    queryKey: [apiRoute.Search, keyword],
    queryFn: async () =>
      api.get(
        getDynamicRoute(apiRoute.Search, {
          query: {
            keyword,
          },
        })
      ),
  })

  const onClickWrite = (id: number) => {
    push(
      getDynamicRoute(pageRoute.statement, {
        path: ["write"],
        query: {
          id,
        },
      })
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {searchList?.map(({ id, name, email }) => (
        <DashboardCompany
          key={id}
          name={name}
          email={email}
          statementCount={0}
          onClickWrite={() => onClickWrite(id)}
        />
      ))}
    </div>
  )
}

export default DashboardSearchList
