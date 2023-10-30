const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv')


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// --- MIDDLEWARE --
app.use(
    cors({
        origin: ["http://localhost:3000/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,

    })
    );
app.use(cors(), express.json(), express.urlencoded({ extended: true }))


require("dotenv").config()
require("./config/mongoose.config");
require("./routes/Store.routes")(app);
require("./routes/Auth.routes");





const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
})