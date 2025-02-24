const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://sherifaalsaiqe72:root123@cluster0.hspfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database !");
  })
  .catch((err) => {
    console.log(err);
  });
