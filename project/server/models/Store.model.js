const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({

    
    StoreName:{
        type: String,
        required: [true, "Name must contain 3 characters!"],
        minlength: 3
        
    },

    StoreNumber:{
        type: Number,
        required: [true, "Must be a unique number greater than 0"],
    },

    Open:{
       type: Boolean,
       default:false
    },

},{ timestamps: true })

module.exports = mongoose.model("Store", StoreSchema)