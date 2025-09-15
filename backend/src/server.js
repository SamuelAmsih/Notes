import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(5005, () => {
    console.log("Server started on PORT: 5005");
});


