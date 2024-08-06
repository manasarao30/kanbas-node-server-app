import express from "express";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

import cors from "cors";
const app = express();
app.use(cors());                    // make sure cors is used right after creating the app
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);

Lab5(app);                          // express instance
app.listen(process.env.PORT || 4000)

