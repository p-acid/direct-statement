import DashboardCalendar from "./src/ui/calendar"

const Dashboard = async () => {
  return (
    <div className="flex flex-col gap-5">
      <DashboardCalendar />
    </div>
  )
}

export default Dashboard
