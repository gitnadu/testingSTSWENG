import { Schema, model, models } from "mongoose";

/*
Not finalzied. It will be modified further in the next sprints.
Fields are not complete.
*/
const serviceSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["A", "B", "C"],
  },
  status: {
    type: String,
    required: true,
    enum: ["accomplished", "in progress", "terminated", "delayed"],
  },
});

const Service = models.Service || model("Service", serviceSchema, "services");
export default Service;
