import { connectDB } from "@/utils/connect";

export async function POST(req){
    try{
        await connectDB();
        const {email,password}  = await req.json();
    }catch(error){
        console.log(error);

    }
}