import { Schema, model, models } from "mongoose";

/*
Not finalzied. It will be modified further in the next sprints.
Fields are not complete.
*/
const reportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reporter_name: {
    type: String,
    required: true,
  },
});

const Report = models.Report || model("Report", reportSchema, "reports");
export default Report;
