import DashboardSearchForm from "./src/ui/search-form"
import DashboardSheet from "./src/ui/sheet"

const Dashboard = async () => {
  return (
    <div className="flex flex-col gap-5 p-6">
      <DashboardSearchForm />
      <DashboardSheet />
    </div>
  )
}

export default Dashboard
