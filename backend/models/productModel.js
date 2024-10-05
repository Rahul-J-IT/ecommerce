const  mongoose=require('mongoose')

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required :[true, "please enter product name"],
        trim:true,
        maxLength:[100,"Product name cannot exceed 100 characters"],

    },
    price:{
        type:Number,
        required:true,
        default:0.0,
        
    },
    description:{
        type:String,
        required:[true,"please enter product description"]

    },
    ratings:{
        type:String,
        default:0
    },
    images:[
        {
            filename:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product catalog"],
        enum:{
            values:[
                'Electronics',
                'Mobile Phones',
                'Accesories',
                'HeadPhones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            messsage:"Please select correct category"
        }
    }
})