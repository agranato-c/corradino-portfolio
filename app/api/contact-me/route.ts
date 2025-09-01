import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
    const { firstname, lastname, email, phone, companyname, contactingback } = await req.json();

    console.log(["First name: ", firstname]);
    console.log(["Last name: ", lastname]);
    console.log(["Email: ", email]);
    console.log(["Phone: ", phone]);
    console.log(["Company Name: ", companyname]);
    console.log(["Contacting Back: ", contactingback]);

    try {
        await connectDB();
        await Contact.create({ firstname, lastname, email, phone, companyname, contactingback });

        return NextResponse.json({
            msg: ['Form submitted successfully!'],
            success: true,
        });
    } catch(error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList });
        }
        else {
           return NextResponse.json({ msg: ["Unable to send message"] });
        }
    }
}
