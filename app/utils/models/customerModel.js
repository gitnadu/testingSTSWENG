import { Schema, model, models } from "mongoose";

/*
Not finalzied. It will be modified further in the next sprints.
Fields are not complete.
*/
const customerSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["Public", "Private"] },
  contact_person: { type: String, required: true },
  contact_number: { type: String, required: true },
  address: { type: String, required: true },
  email_address: { type: String, required: true },
  status: { type: String, required: true, enum: ["Ongoing"] },
});

const Customer =
  models.Customer || model("Customer", customerSchema, "customers");
export default Customer;
