"use client"

import { useSearchParams } from "next/navigation"

import { useQuery } from "@/utils/tanstack"
import { Company } from "@prisma/client"

import { apiRoute } from "@/lib/api-route"
import api from "@/lib/axios/base"
import { getDynamicRoute } from "@/lib/utils"

import DashboardCompany from "./company"

const DashboardSearchList = () => {
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

  return (
    <div className="flex flex-col gap-4">
      {searchList?.map(({ id, name, email }) => (
        <DashboardCompany
          key={id}
          name={name}
          email={email}
          statementCount={0}
        />
      ))}
    </div>
  )
}

export default DashboardSearchList
