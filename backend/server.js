const express=require("express");
const cors=require("cors")
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const taskRoutes=require("./routes/taskRoute")

dotenv.config();
connectDB();

const app= express()

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://taskweb-vert.vercel.app",
    "https://taskweb-dyu9535lz-astech01s-projects.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
app.use(express.json())

app.use('/api/tasks',taskRoutes)

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>
    console.log(`server is running on port ${PORT}`));