const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config()
const port = 3000;

mongoose.connect(process.env.DB_URL).then(() => { console.log('Connected to db') }).catch((err) => { console.log(err) });

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});