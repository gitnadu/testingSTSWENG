import { NextResponse } from "next/server";
import Contract from "../../utils/models/contractModel";
import connectDB from "../../utils/connectDB";
import { Types } from "mongoose";

const contracts = [
  {
    customer_id: new Types.ObjectId("670fa61051c3971a0802918c"),
    services: ["Hygenic Pest Control", "Rodent Control"],
    start_date: new Date("2024-09-02"),
    end_date: new Date("2024-10-12"),
    frequency: "Every day"
  },
  {
    customer_id: new Types.ObjectId("670fa61051c3971a0802918c"),
    services: ["Hygenic Pest Control"],
    start_date: new Date("2023-07-26"),
    end_date: new Date("2024-07-26"),
    frequency: "Every quarter"
  },
  {
    customer_id: new Types.ObjectId("670fa61051c3971a0802918c"),
    services: ["Hygenic Pest Control", "Termite Control", "Rodent Control"],
    start_date: new Date("2022-09-05"),
    end_date: new Date("2022-12-15"),
    frequency: "Every day"
  }
];

export async function GET() {
  try {
    await connectDB();
    for (const contract of contracts) {
      const newContract = new Contract(contract);
      await newContract.save();
    
      console.log("New contract instance saved.");
    }
    
    console.log("Database seeding with contracts.");
    
    return NextResponse.json({ message: "Seeding database with contracts successful." }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred while seeding the database." }, { status: 500 });
  }
}