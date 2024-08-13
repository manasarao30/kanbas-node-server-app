import * as courseDao from "./courseDao.js";

export default function CourseRoutes(app) {

  app.put("/api/courses/:number", async (req, res) => {
    const { number } = req.params;
    const course = req.body;
    const status = await courseDao.updateCourseByNumber(number, course);
    res.sendStatus(204);
  });

  app.delete("/api/courses/:number", async (req, res) => {
    const { number } = req.params;
    const status = await courseDao.deleteCourseByNumber(number);
    res.sendStatus(204);
  });

  app.post("/api/courses", async (req, res) => {
    const course = await courseDao.createCourse(req.body);
    res.json(course);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await courseDao.findAllCourses();
    res.json(courses);
  });

  app.get("/api/courses/:number", async (req, res) => {
    const course = await courseDao.findCourseByNumber(req.params.number);
    res.json(course);
  });
}
