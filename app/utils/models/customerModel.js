import { Schema, model, models } from "mongoose";

/*
Not finalzied. It will be modified further in the next sprints.
Fields are not complete.
*/
const customerSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    require: true,
  },
});

const Customer =
  models.Customer || model("Customer", customerSchema, "customers");
export default Customer;
