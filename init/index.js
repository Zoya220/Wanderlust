const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB");
    return initDB();
  })
  .then(() => {
    console.log("Data was initialized successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Initialization error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  // Updated with a valid 24-character hexadecimal ObjectId
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65c2225c629810084ba70f53",
  }));
  await Listing.insertMany(initData.data);
};
