import Customer from "../../utils/models/customerModel";
import connectDB from "../../utils/connectDB";


export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)

        //If a url parameter is null, it is converted into undefined. Null value is a falsey value.
        const name = searchParams.get("name") ? searchParams.get("name") : undefined;
        const type = searchParams.get("type") ? searchParams.get("type") : undefined;
        const status = searchParams.get("status") ? searchParams.get("status") : undefined;
        const date = searchParams.get("date") ? searchParams.get("date") : undefined;

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
