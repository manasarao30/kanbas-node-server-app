import mongoose from "mongoose";
import courseSchema from "./courseSchema.js";
const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;