import { NextResponse } from "next/server";
import Customer from "../../utils/models/customerModel";
import connectDB from "../../utils/connectDB";

const customers = [
  {
    name: "STSWENG Group 9",
    type: "Other",
    contact_person: "Adriel Fancubit",
    contact_number: "09123456789",
    address: "Taft Manila",
    email_address: "stsweng_group_9@gmail.com",
    status: "Ongoing",
    date: "2024-09-02",
    services: ["Hygenic Pest Control",]
  },
  {
    name: "DLSU Laguna",
    type: "Service",
    contact_person: "John Baptist De La Salle",
    contact_number: "0212345678",
    address: "Biñan City, Laguna",
    email_address: "dlsu_laguna@dlsu.edu.ph",
    status: "Ongoing",
    date: "2022-09-02",
    services: ["Hygenic Pest Control", "Termite Control",]
  },
  {
    name: "Multi-Pest Services Corp.",
    type: "Service",
    contact_person: "Norma B. Salazar",
    contact_number: "0287654321",
    address: "Mandaluyong City, NCR",
    email_address: "multipest14@yahoo.com",
    status: "Ongoing",
    date: "1972-10-23",
    services: [ "Termite Control", "Rodent Control",]
  },
  {
    name: "Manila City Hall",
    type: "Other",
    contact_person: "Airelle Maagma",
    contact_number: "+639876543210",
    address: "Manila, NCR",
    email_address: "manila_city_hall@gmail.com",
    status: "Ongoing",
    date: "1980-08-10",
    services: ["Hygenic Pest Control", "Rodent Control",]
  },
  {
    name: "Galleria Regency Condominium Corporation",
    type: "Residential",
    contact_person: "John Richard B. Sotelo",
    contact_number: "+630212345678",
    address: "Pasig city, NCR",
    email_address: "galleria_regency@gmail.com",
    status: "Ongoing",
    date: "1990-02-20",
    services: ["Rodent Control",]
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