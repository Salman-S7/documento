import { GET } from "@/app/api/login/route"

const page = () => {
    const data = GET();
  return (
    <div>
        login page the data is {data}
    </div>
  )
}

export default page
