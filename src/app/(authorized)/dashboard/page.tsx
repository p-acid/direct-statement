import { getServerAccount } from "@/app/api/auth/action"

const Dashboard = async () => {
  const account = await getServerAccount()

  return (
    <div>
      <p>로그인 된 유저</p>
      <p>유저명: {account?.user.name}</p>
      <p>이메일: {account?.user.email}</p>
    </div>
  )
}

export default Dashboard
