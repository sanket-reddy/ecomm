import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  await mongoose.connect(
    "mongodb+srv://site-1:passwordofsite-1@cluster0.agwik1p.mongodb.net/"
  );
}
