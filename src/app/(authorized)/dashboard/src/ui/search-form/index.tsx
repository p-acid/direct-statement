import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DashboardSearchForm = () => {
  return (
    <div className="flex items-center gap-3">
      <Input placeholder="검색어를 입력하세요." />
      <Button>검색</Button>
    </div>
  )
}

export default DashboardSearchForm
