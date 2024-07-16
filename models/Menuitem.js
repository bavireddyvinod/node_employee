const mongoose= require("mongoose");
const menuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    taste:{
        type : String,
        enum : ["sweet", "spicy", "sour"],
        required : true
    },
    is_drink:{
        type : Boolean,
        default: false
    },
    ingreditems: {
        type : String,
        enum :["chicken wings", "spices", "sauce"],
        required :true
    },
    num_sales: {
        type : Number,
        default: 0
    }
});
 // create person model
const menuItem = mongoose.model("Menuitems", menuItemSchema);
module.exports = menuItem;