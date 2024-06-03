import axios from "axios";	

export async function GET() {
   const res = await axios.get("http://127.0.0.1:5328/api/python")

   return new Response(res.data)
}