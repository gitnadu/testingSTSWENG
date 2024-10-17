import { NextResponse } from "next/server";
import Proposal from "../../utils/models/proposalModel";
import connectDB from "../../utils/connectDB";
import { Types } from "mongoose";

const proposals = [
  {
    customer_id: new Types.ObjectId("670fa60f51c3971a08029186"),
    product: "Exterra Baiting System",
    quotation_total: 100000,
    frequency: "Every week",
  },
  {
    customer_id: new Types.ObjectId("670fa60f51c3971a08029184"),
    product: "Exterra Baiting System",
    quotation_total: 1000000,
    frequency: "Every Monday and Friday",
  },
  {
    customer_id: new Types.ObjectId("670fa61051c3971a0802918c"),
    product: "Exterra Baiting System",
    quotation_total: 93748912,
    frequency: "Every week",
  },
];

export async function GET() {
  try {
    await connectDB();
    for (const proposal of proposals) {
      const newProposal = new Proposal(proposal);
      await newProposal.save();
    
      console.log("New proposal instance saved.");
    }
    
    console.log("Database seeding with proposals.");
    
    return NextResponse.json({ message: "Seeding database with proposals successful." }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred while seeding the database." }, { status: 500 });
  }
}