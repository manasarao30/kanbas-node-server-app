import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING ||
  "mongodb+srv://Cluster98951:UGNCUEJ0Yldv@cluster98951.0l7ga.mongodb.net/kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
    // origin: true
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);

AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
