import express from "express";

import dotenv from "dotenv"
import connectDB from "./src/config/monogodb.config.js"
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.route.js"
import auth_routes from "./src/routes/auth.route.js"

import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser"

dotenv.config("./.env")

const app = express();

app.use(cors({
    origin: 'https://url-shortner-1-qw6r.onrender.com', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
 app.use('/api/user', short_url);
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

const server=app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on http://localhost:3000");
})
