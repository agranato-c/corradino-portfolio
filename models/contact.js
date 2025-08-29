import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "First name is required."],
        trim: true,
        minlength: [2, "First name must be at least 2 characters long"],
        maxLength: [50, "First name must be lesser than 50 characters"],
    },

    lastname: {
        type: String,
        required: [true, "Last name is required."],
        trim: true,
        minlength: [2, "Last name must be at least 2 characters long"],
        maxLength: [50, "Last name must be lesser than 50 characters"],
    },

    email: { 
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    phone: {
        type: String,
        required: [true, "Phone number is required."],
        minlength: [7, "Phone number must be at least 7 numbers long"],
        maxLength: [20, "Phone number must be lesser than 20 numbers"],
    },
    companyname: {
        type: String,
        required: false,
        trim: true,
    },
    contactingback: {
        type: Boolean,
        required: [true, "Contacting back is required."],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = 
    mongoose.models.Contact || mongoose.model("Contact", contactSchema, "contacts");

export default Contact;
