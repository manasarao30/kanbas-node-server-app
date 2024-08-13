
import ModuleModel from "./moduleModel.js";

export const findAllModules = () => ModuleModel.find();

export const findModulesByCourseNumber = (courseNumber) => ModuleModel.find({ course: courseNumber });

export const findModuleById = (moduleId) => ModuleModel.findById(moduleId);

export const createModule = (module) => ModuleModel.create(module);

export const updateModule = (moduleId, module) =>
  ModuleModel.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => ModuleModel.deleteOne({ _id: moduleId });
