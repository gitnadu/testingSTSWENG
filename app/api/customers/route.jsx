import Customer from "../../utils/models/customerModel";
import connectDB from "../../utils/connectDB";


export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)

        //If a url parameter is null, it is converted into undefined. Null value is a falsey value.
        const name = searchParams.get("name");
        const type = searchParams.get("type");
        const status = searchParams.get("status");

        //Columns of Date type is not in the Customer schema. Why is the date filter used?
        const dateStr = searchParams.get("date") ? searchParams.get("date") : null;
        const date = dateStr ? new Date(dateStr) : null; 

        //create filter query.
        const query = {};
        if (name) query.name = {
            $regex: new RegExp(name, "i")
        };
        if (type) query.type = type;
        if (status) query.status = status;
        if (date) query.date = date;

        await connectDB();
        const results = await Customer.find(query).exec();
        console.log(name, type, status, date);
        console.log(results)

        return Response.json({ results, status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ message: "An error occurred while getting a summary." }, { status: 500 });
    }
};

export async function POST(request) {
    try {
        const {
            client_name,
            contact_person,
            email_address,
            address,
            services,
            status,
            type,
            contact_number
        } = request.body;
    
        const currentDate = new Date()
    
        const new_customer = new Customer({
            client_name,
            type,
            currentDate,
            contact_person,
            contact_number,
            address,
            email_address,
            status,
            services
        });
    
        await new_customer.save();
        
        console.log("New customer instance saved.");

        return Response.json({ 
            message: "Creating a new customer instance successful.", 
            status: 201 
        });
    } catch (error) {
        console.log("Error: ", error);
        return Response.json({ 
            message: "Error occured while creating a new customer instance.", 
            status: 500 
        });
    }
}

export async function PUT() {

}

export async function DELETE() {

}
