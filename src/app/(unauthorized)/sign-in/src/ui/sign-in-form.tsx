"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { pageRoute } from "@/lib/page-route"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "최소 한 글자를 입력해주세요" })
    .email("올바른 이메일 형태가 아닙니다."),
  password: z.string().min(1, { message: "최소 한 글자를 입력해주세요" }),
})

const SignInForm = () => {
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)

    const res = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: pageRoute.dashboard,
    })

    if (res) {
      const { ok, error } = res

      if (!ok) {
        toast({
          title: "로그인에 실패했습니다.",
          description: error,
        })
        setLoading(false)
        return
      }

      push(pageRoute.dashboard)
      toast({
        title: "로그인 되었습니다!",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="아이디를 입력하세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-2" type="submit" disabled={loading}>
          로그인
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm
