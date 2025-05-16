import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parser req.body
app.use(express.urlencoded({ extended: true })); // to parse form data (urlencoded)

app.use(cookieParser())

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});