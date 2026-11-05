if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB successfully");
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
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Update with your actual registered Admin / User ID from MongoDB Atlas or Local DB
  const DEFAULT_OWNER_ID =
    process.env.DEFAULT_OWNER_ID || "65c2225c629810084ba70f53";

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: DEFAULT_OWNER_ID,
  }));

  await Listing.insertMany(initData.data);
};
