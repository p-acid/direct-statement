"use client"

import { useSearchParams } from "next/navigation"

import { useQuery } from "@/utils/tanstack"
import { Company } from "@prisma/client"

import { apiRoute } from "@/lib/api-route"
import api from "@/lib/axios/base"
import { getDynamicRoute } from "@/lib/utils"
import Loading from "@/components/common/loading"

import DashboardCompany from "./company"

const DashboardSearchList = () => {
  const searchParams = useSearchParams()

  const keyword = searchParams.get("keyword")

  const { data: searchList, isLoading } = useQuery<Company[]>({
    queryKey: [apiRoute.company, keyword],
    queryFn: async () =>
      api.get(
        getDynamicRoute(apiRoute.company, {
          query: {
            keyword,
          },
        })
      ),
  })

  const onClickWrite = () => {
    // 작성 로직 추가
  }

  if (isLoading)
    return (
      <Loading className="h-[70vh]" text="회사 목록을 불러오는 중입니다." />
    )

  return (
    <div className="flex flex-col gap-4">
      {searchList?.map(({ id, name, email }) => (
        <DashboardCompany
          key={id}
          name={name}
          email={email}
          statementCount={0}
          onClickWrite={() => onClickWrite()}
        />
      ))}
    </div>
  )
}

export default DashboardSearchList
