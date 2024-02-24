import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/userModel";
import { connectDB } from "@/lib/connect";

export async function POST(request) {
  try {
    await connectDB();
    const { username, email, password } = await request.json();
    console.log(username,email,password);
    const exists = await User.findOne({ email });

    if (exists) {
      return NextResponse.json(
        {
          message: "Username or email already exists.",
        },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json(
      {
        message: "User successfully registered!",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "User registration failed!",
      },
      { status: 500 }
    );
  }
}
