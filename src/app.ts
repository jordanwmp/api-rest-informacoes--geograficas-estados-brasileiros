import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import estadosRoutes from './routes/estado.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use("/static", express.static("public"))

app.use("/api/v1/estados", estadosRoutes)

app.listen(PORT, ()=>{
  console.log(`Servcer running on ${PORT}`)
})