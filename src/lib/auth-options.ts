import { compare } from "bcryptjs"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { pageRoute } from "./page-route"
import prisma from "./prisma"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      /**
       * The object key type defined in the corresponding `credentials` field is passed as
       * an argument (`credentials`) to the `authorize` callback below.
       */
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error("오류가 발생했습니다.")

        const { email, password } = credentials

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        })

        if (!user) throw new Error("존재하지 않는 아이디입니다.")

        const result = await compare(password, user.token)

        if (!result) throw new Error("패스워드가 일치하지 않습니다.")

        return user as any
      },
    }),
  ],
  pages: { signIn: pageRoute.signIn },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(userDetail) {
      if (Object.keys(userDetail).length === 0) {
        return false
      }

      return true
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/${pageRoute.dashboard}`
    },

    async session({ session }) {
      const user = await prisma.user.findFirst({
        where: {
          email: session.user.email,
        },
      })

      session.user = { ...session.user, ...user }

      return session
    },
  },
}

export default authOptions
