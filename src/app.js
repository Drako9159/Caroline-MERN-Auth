import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/api", authRouter)

export default app