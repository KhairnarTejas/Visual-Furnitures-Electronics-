
const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const electronicSchema = new Schema(

    {
        electronic_product :{

            type : String,
            required : true,
        },
        electronic_product_company:{

            type: String ,
        },
        electronic_product_image:{

            //type: String,       
            //filename: String,   

            
           type: String,
           default:
            "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg",
            set : (v) => v === "" 
            ? "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"
            : v,

        },

        electronic_product_size :{
            type : String,
        },
        electronic_product_price :{
            type : Number,
        },
  

        reviews :[
            {
                type: Schema.Types.ObjectId,
                ref : "Review",
            },
        ],
        owner: {
                type: Schema.Types.ObjectId,
                ref : "User",

        }
    }
);




const Electronic  = mongoose.model("Electronic" , electronicSchema);
module.exports = Electronic;
