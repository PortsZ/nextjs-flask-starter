import axios from "axios";	

export async function GET() {
   const res = await axios.get("api/api/python")

   return new Response(res.data)
}