import mongoose from "mongoose";
import moduleSchema from "./moduleSchema.js";

const ModuleModel = mongoose.model("Module", moduleSchema);

export default ModuleModel;
