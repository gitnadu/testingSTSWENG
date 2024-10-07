import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../utils/models/userModel";
import connectDB from "../../utils/connectDB";
export async function POST(req) {
    const body = await req.text();
    const params = new URLSearchParams(body);
    const username = params.get('username');
    const password = params.get('password');
    const email = params.get('email');

    try {
        await connectDB();
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return NextResponse.json({ message: "Name already exists." }, { status: 409 }); 
        }
 
        const hashedPassword = await bcrypt.hash(password, 10);
       
        console.log(hashedPassword);
        await User.create({ username, password: hashedPassword, email });
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred during registration." }, { status: 500 });
    }
}