import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import movieRoute from "./routes/movieRoutes.js";

databaseConnection();

dotenv.config({
    path: ".env"
});

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS setup
// const corsOptions = {
//     origin: 'https://netflix-2-0-frontend.vercel.app', // No trailing slash
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// };

const corsOptions = {
    origin:'https://netflix-2-0-frontend.vercel.app',
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/movies", movieRoute);

// Server start
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
