import DashboardSearchForm from "./src/ui/search-form"
import DashboardSearchList from "./src/ui/search-list"

const Dashboard = async () => {
  return (
    <div className="flex flex-col gap-5 p-6">
      <DashboardSearchForm />
      <DashboardSearchList />
    </div>
  )
}

export default Dashboard
