import * as moduleDao from "./moduleDao.js";

export default function ModuleRoutes(app) {
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await moduleDao.updateModule(mid, req.body);
    res.sendStatus(204);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await moduleDao.deleteModule(mid);
    res.sendStatus(200);
  });

  app.post("/api/courses/:courseNumber/modules", async (req, res) => {
    const { courseNumber } = req.params;
    const newModule = {
      ...req.body,
      course: courseNumber,
    };
    const module = await moduleDao.createModule(newModule); // No _id needed in req.body
    res.json(module);
  });

  app.get("/api/courses/:courseNumber/modules", async (req, res) => {
    const { courseNumber } = req.params;
    const modules = await moduleDao.findModulesByCourseNumber(courseNumber);
    res.json(modules);
  });
}
