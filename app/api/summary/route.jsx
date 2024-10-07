import { NextResponse } from "next/server";
import Customer from "../../utils/models/customerModel";
import Service from "../../utils/models/serviceModel";
import Report from "../../utils/models/reportModel";
import connectDB from "../../utils/connectDB";
import moment from "moment";

export async function GET() {
    try {
        const today = moment().startOf('day');

        await connectDB();
        const num_of_total_customers = await Customer.find({}).countDocuments();
        const num_of_active_customers = await Customer.find({}).countDocuments({ active: true });
        const num_of_accomplished_services = await Service.find({}).countDocuments({ status: "accomplished" })
        const num_reports_submitted = await Report.find({}).countDocuments();
        const num_of_services_today = await Service.find({ 
            date: {
                $gte: today.toDate(), 
                $lt: moment(today).endOf('day').toDate(),
        }}).countDocuments();

        return NextResponse.json({ num_of_total_customers,
                                   num_of_active_customers,
                                   num_of_accomplished_services,
                                   num_reports_submitted,
                                   num_of_services_today
                                 }, 
                                 { 
                                    status: 200 
                                });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while getting a summary." }, { status: 500 });
    }
};

