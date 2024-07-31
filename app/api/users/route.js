import { NextResponse } from "next/server";
import { mongoose } from "mongoose";
import Admin from "@/model/LoginUser";
import jwt from "jsonwebtoken";
let secretKey = process.env.S_KEY;
let success = false;

const connectToMongo = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already Connected");
  } else {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Successfully");
  }
};

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;
    connectToMongo();

    const user = await Admin.findOne({ email });
    if (!user) {
      return NextResponse.json({ MSG: "Invalid Credentials", status: 500 });
    }
    if (user.email == email && user.password == password) {
      let token = jwt.sign({ email }, secretKey);
      return NextResponse.json({ MSG: "Success", token, status: 200 });
    }

    return NextResponse.json({ MSG: "Unsuccess", success, status: 500 });
  } catch (err) {
    return NextResponse.json({ error: err.message, status: 500 });
  }
}
