import Customer from "../../utils/models/customerModel";
import connectDB from "../../utils/connectDB";


export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const name = searchParams.get("name");
        const type = searchParams.get("type");
        const status = searchParams.get("status");
        const date = searchParams.get("date");

        await connectDB();
        const results = await Customer.find({}).exec();
        console.log(name, type, status, date);
        console.log(results)

        return Response.json({ results, status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ message: "An error occurred while getting a summary." }, { status: 500 });
    }
};

export async function POST() {

}

export async function PUT() {

}

export async function DELETE() {

}
