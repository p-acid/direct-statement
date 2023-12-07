import { NextRequest, NextResponse } from "next/server"

import prisma from "@/lib/prisma"

import { getServerAccount } from "../auth/action"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const keyword = searchParams.get("keyword") || ""
  const account = await getServerAccount()

  const monsterList = await prisma.company.findMany({
    where: {
      ownerId: account?.user.id,
      OR: [
        {
          name: {
            contains: keyword,
          },
        },
      ],
    },
  })

  return NextResponse.json(monsterList)
}
