const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI);
    console.log("Conexión correcta.");
  } catch (error) {
    console.error("Error de conexión.");
  }
};

module.exports = dbConnect;
