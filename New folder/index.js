import express from "express"
import mongodbconnect from "./config/database.js";
import {userRouter} from "./routes/user.routes.js";
import {ExpenseRouter} from './routes/expense.routes.js'
import {incomeRouter} from "./routes/income.routes.js"
import {targetRouter} from "./routes/target.routes.js"

import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
const port = 5000;
mongodbconnect()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json()); // parse express document
app.use(express.urlencoded({extended: true})) //parse html document

//route
app.use('/user', userRouter);
app.use("/expense", ExpenseRouter);
app.use("/income", incomeRouter);
app.use("/target",targetRouter);

app.listen(port, ()=>{
    console.log(`app running on the number ${port}`);
})