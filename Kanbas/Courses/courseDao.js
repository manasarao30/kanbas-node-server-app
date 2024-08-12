import courseModel from "./courseModel.js";
export const findAllCourses = () => courseModel.find();
export const findCourseByNumber = (number) => courseModel.findOne({ number });
export const findCourseById = (id) => courseModel.findById(id); 
export const createCourse = (course) => courseModel.create(course);
export const updateCourseByNumber = (number, course) =>
  courseModel.updateOne({ number }, { $set: course });
export const deleteCourseByNumber = (number) =>
  courseModel.deleteOne({ number });
