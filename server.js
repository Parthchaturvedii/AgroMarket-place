require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes"); 

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("MongoDB connected")).catch(err=> console.log(err));

app.listen(process.env.PORT , () => console.log(`server running on port ${process.env.PORT}`));