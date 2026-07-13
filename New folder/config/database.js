import mongoose from "mongoose";

async function mongodbconnect() {
    await mongoose.connect('mongodb://localhost:27017/authApp');
    console.log("database is connected");
}

export default mongodbconnect;
