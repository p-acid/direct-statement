import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Form from "./src/ui/form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-50 transition-colors dark:bg-black">
      <Card>
        <CardHeader>
          <CardTitle>이지택스</CardTitle>
          <CardDescription>세금명세서를 더 간편히 작성하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </main>
  )
}
