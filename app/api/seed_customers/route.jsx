import { NextResponse } from "next/server";
import Customer from "../../utils/models/customerModel";
import connectDB from "../../utils/connectDB";

const customers = [
  {
    name: "STSWENG Group 9",
    type: "Public",
    contact_person: "Adriel Fancubit",
    contact_number: "0123456789",
    address: "Taft Manila",
    email_address: "stsweng_group_9@gmail.com",
    status: "Ongoing",
  },
  {
    name: "DLSU Laguna",
    type: "Private",
    contact_person: "John Baptist De La Salle",
    contact_number: "049 554 8900",
    address: "Biñan City, Laguna",
    email_address: "dlsu_laguna@dlsu.edu.ph",
    status: "Ongoing",
  },
  {
    name: "Multi-Pest Services Corp.",
    type: "Private",
    contact_person: "Norma B. Salazar",
    contact_number: "631 9693",
    address: "Mandaluyong City, NCR",
    email_address: "multipest14@yahoo.com",
    status: "Ongoing",
  },
  {
    name: "Manila City Hall",
    type: "Public",
    contact_person: "Airelle Maagma",
    contact_number: "9876543210",
    address: "Manila, NCR",
    email_address: "manila_city_hall@gmail.com",
    status: "Ongoing",
  },
  {
    name: "Galleria Regency Condominium Corporation",
    type: "Private",
    contact_person: "John Richard B. Sotelo",
    contact_number: "982 8913 8712",
    address: "Pasig city, NCR",
    email_address: "galleria_regency@gmail.com",
    status: "Ongoing",
  },
];

export async function GET() {
  try {
    await connectDB();
    for (const customer of customers) {
      const newCustomer = new Customer(customer);
      await newCustomer.save();
    
      console.log("New customer instance saved.");
    }
    
    console.log("Database seeding with customers.");
    
    return NextResponse.json({ message: "Seeding database with customers successful." }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred while seeding the database." }, { status: 500 });
  }
}