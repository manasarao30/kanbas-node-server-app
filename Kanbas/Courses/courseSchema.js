import mongoose from "mongoose";
const courseSchema = mongoose.Schema(
  {
    number: { type: String, required: true },
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    department: { type: String, required: true },
    credits: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
  },
  { collection: "courses" }
);

export default courseSchema;

