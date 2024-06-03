import axios from "axios";	

export async function GET() {
   const res = await axios.get("/api/python")
// const res = {data:"test"} 
   return new Response(res.data)
}