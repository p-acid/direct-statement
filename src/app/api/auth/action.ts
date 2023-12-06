import { getServerSession } from "next-auth"

import authOptions from "@/lib/auth-options"

const getServerAccount = async () => {
  const session = await getServerSession(authOptions)
  return session
}

export { getServerAccount }
