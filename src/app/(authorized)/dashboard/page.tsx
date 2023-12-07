import DashboardCompany from "./src/ui/company"
import DashboardSearchForm from "./src/ui/search-form"

const Dashboard = async () => {
  return (
    <div className="flex flex-col gap-5 p-6">
      <DashboardSearchForm />

      <div className="flex flex-col gap-4">
        <DashboardCompany
          name="일산하이테크"
          statementCount={3}
          email="onemountain13@gmail.com"
          lastPublicationDate="2023-12-07"
        />
      </div>
    </div>
  )
}

export default Dashboard
