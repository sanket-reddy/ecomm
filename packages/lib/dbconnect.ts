import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    // console.log("db connected already");
  } else {
    alreadyDone = true;
    await mongoose.connect(
      "mongodb+srv://site-1:passwordofsite-1@cluster0.agwik1p.mongodb.net/"
    );
  }
}
