import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
//app.use(cors());

app.use(
  cors({
    origin: "https://imagify-omega-gilt.vercel.app", // Allow frontend
    methods: "GET,POST,PUT,DELETE", // Allowed request types
    credentials: true, // If using cookies/sessions
  })
);

await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("API WORKING!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
