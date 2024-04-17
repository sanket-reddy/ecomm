import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    // console.log("db connected already");
  } else {
    alreadyDone = true;
    await mongoose.connect(
      "mongodb+srv://sanketh:G3ivLcBrY6s2BaMu@cluster0.3xcb2wu.mongodb.net/"
    );
  }
}
// G3ivLcBrY6s2BaMu

// "mongodb+srv://site-1:passwordofsite-1@cluster0.agwik1p.mongodb.net/"
// "mongodb+srv://sanketh:G3ivLcBrY6s2BaMu@cluster0.3xcb2wu.mongodb.net/"
