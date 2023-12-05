import { Separator } from "@/components/ui/separator"

import Form from "./src/ui/form"
import ThemeButtons from "./src/ui/theme-buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-50 transition-colors dark:bg-zinc-900">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-800 transition-colors dark:text-zinc-300">
          이지택스
        </h1>

        <p className="text-xl font-light tracking-tight text-zinc-800 transition-colors dark:text-zinc-200">
          세금명세서를 더 간편히 작성하세요
        </p>
      </div>

      <Separator />

      <Form />
    </main>
  )
}
