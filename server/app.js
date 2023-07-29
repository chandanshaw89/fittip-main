const express = require("express");
const app = express();


const cors = require("cors");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());

app.set("view engine", "ejs");

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);





dotEnv.config({ path: "./.env" });

const port = process.env.PORT || 6000;

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("error occur",err));

 
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is live" });
});
// app.use("/api/users", require("./routes/userRouter"));
// app.use("/api/users", require("./routes/profileRouter"));
// app.use("/api/admin/manage-stocks", require("./routes/stockRouter"));
// app.use("/api/admin/manage-pizza", require("./routes/pizzaRouter"));
// app.use("/api/users/pizza-menu", require("./routes/pizzaMenuRouter"));
// app.use("/api/users/payment",require("./routes/paymentRouter"))
// app.use("/api/users/myorders",require("./routes/orderRouter"));
// app.use("/api/admin/manage-orders",require("./routes/manageOrderRouter"))

app.use("/api/tips",require("./routes/tipsRouter"));



const server=app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});







