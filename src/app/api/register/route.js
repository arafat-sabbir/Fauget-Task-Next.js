import { connectDB } from "@/utils/connect";
export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    console.log(username, email, password);
  } catch (error) {
    console.log("error while registering",error);
  }
}
