import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
        "mongodb+srv://drako9159:aucpGcl2ZzoDBNjV@cluster0.3884ps0.mongodb.net/dbapi?retryWrites=true&w=majority"
      );
      console.log(">>> DB is connected")
  } catch (err){
    console.log(err)
  }
}
