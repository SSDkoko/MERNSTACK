const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:5000/", // Update to match your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);
require("dotenv").config()
require("./config/mongoose.config");
require("./routes/product.routes")(app);


port = process.env.PORT

app.listen(port, () => {
    console.log(`listening to ${port}`);
})