import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"
import tasksRouter from "./routes/tasks.routes.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use("/api", authRouter)
app.use("/api", tasksRouter)

export default app