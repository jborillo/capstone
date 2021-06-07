const mongoose = require('mongoose');
mongoose.pluralize(null); //prevent mongoose from adding s 
const Schema = mongoose.Schema;
// mongoopse image file
//TODO: Category

// For GPS
const PointSchema=new Schema({
    type:{
        type:String,
        enum:['Point'],
        required:true
    },
    coordinates:{
        type:[Number],
        required:true

    }
});


const ProductSchema = new Schema({
    //sellerId:{type:mongoose.Schema.type.ObjectId,ref:'User'},
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        maxLength:300,
        required:true
    },
    specifications:{
        type:String,
        maxLength:400,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    stocks:{
        type:Number,
        required:true
    },
    pictures:{
        thumbnail:{
            type:String,
            required:true
        },
        carousel:{
            type:Array,
            required:true
        }
    }

}, {
    timestamps: true
});

const UserSchema= new Schema({
    accountType:{
        type:Number,
        required:true
    },
   // addressBookId:{
      //  type:mongoose.Schema.type.ObjectId,
       // ref:'Address Book'
   // },
    profilePicture:{
        type:String,
        required:true
    },
    
    firstName:{
            type:String,
            required:true
    },
    lastName:{
            type:String,
            required:true
    },
    
    userName:{
        type:String,
        maxLength:32,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,'Enter Valid Address'],
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Prefer Not To Say"]
    },
    verificationId:{
        type:String,
        required:true,
    }
});

const ReviewSchema= new Schema({
    //userId:{
      //  type:mongoose.Schema.type.ObjectId,
      //  ref:'User'
   // },
    //productId:{
      //  type:mongoose.Schema.type.ObjectId,
      //  ref:'Product'
   // },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        maxLength:200
    }
});

const AddressBookSchema= new Schema({
   // userId:{
    //    type:mongoose.Schema.type.ObjectId,
    //    ref:'User',
     //   required:true
  //  },
    recieverName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        maxLength:500,
        required:true
    },
    barangay:{
        type:String,
        maxLength:100,
        required:true
    },
    municipality:{
        type:String,
        maxLength:100,
        required:true
    },
    gps:{
        type:PointSchema,
        required:true
    },
    phoneNo:{
        type:[Number],
        required:true
    },
    zipCode:{
        type:String,
        required:true
    }

});

const OrderInfoSchema=new Schema({
   // userId:{
   //     type:mongoose.Schema.type.ObjectId,
    //    ref:'User',
    //    required:true
   // },
    //addressBookId:{
      //  type:mongoose.Schema.type.ObjectId,
      //  ref:'AddressBook',
       // required:true
 //   },
   // productId:{
       // type:mongoose.Schema.type.ObjectId,
       // ref:'Product',
       // required:true
   // },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    status:{
        type:Number,
        required:true,
        default:0
    },
    method:{
        type:Number,
        default:0,
        required:true
    }
    },{
        timestamps: true
    });
//mic
const TestSchema=new Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
        required:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,'Enter Valid Address'],
        lowercase:true
    }
});

const Product=mongoose.model('product',ProductSchema);
//const User=mongoose.model('user',UserSchema);
const Review=mongoose.model('review',ReviewSchema);
const AddressBook=mongoose.model('addressBook',AddressBookSchema);
const OrderInfo=mongoose.model('orderInfo',OrderInfoSchema);

const Test = mongoose.model('user',TestSchema);
module.exports = {
    Product:Product,
    Review:Review,
    AddressBook:AddressBook,
    OrderInfo:OrderInfo,
    Test:Test
}
//luto mode
/*
paste mo dito

Breakfast food and spread.

Product: Milo Active-Go Choco Malt Powdered Milk Drink 1kg
Url:https://www.order247.ca/wp-content/uploads/2020/04/milo-33g-canada.jpg
Price:₱278
Category:Breakfast food and spread.
Description:Pang BreakFast na Inomin

Product:Clara Olé Sugar-Free Strawberry Jam 240g
Url:https://cf.shopee.ph/file/52bed15b5367e4d3296cd17b40e940e1
Price:₱102
Category:Breakfast food and spread.
Description: Spread Jam

Product:NESCAFE CLASSIC DECAF Instant Coffee 80g
Url:https://static.wixstatic.com/media/250a2e_07016825e4da4d25aecefe0e62155866~mv2.jpg/v1/fill/w_421,h_438,al_c,q_85/250a2e_07016825e4da4d25aecefe0e62155866~mv2.jpg
Price:₱85
Category:Breakfast food and spread.
Description: Pang pagising

Product:Koko Krunch Duo 330g
url:https://images-na.ssl-images-amazon.com/images/I/71jhtOvycXL._SL1000_.jpg
Price:₱162
Category:Breakfast food and spread.
Description: Cereal na masarap

Prodcut:Quaker Flavored Oatmeal Original with Milk 500g
url:https://quakeroats.ph/wp-content/uploads/2020/09/0013_Quaker-Flavored-Oatmeal-Original-with-Milk-500g-2.jpg
Price:₱105
Category:Breakfast food and spread.
Description: Cereal na pang palakas



Health & personal care 

Product:Colgate Tiger Kids Toothpaste 40g
url:https://api.watsons.com.ph/medias/Tiger-Kids-Toothpaste-40g-50003530.jpg?context=bWFzdGVyfHd0Y3BoL2ltYWdlc3wzNDQxOTd8aW1hZ2UvanBlZ3xoNzIvaGE4LzkwOTgzNzIyNTE2NzgvVGlnZXIgS2lkcyBUb290aHBhc3RlIDQwZy01MDAwMzUzMC5qcGd8MmJiMzI3NDg3ZWU4MDNmMTgzN2M0YTNjZTQ3ZWE5YWM2YTRhOGE5ZmE5ZTNkYTIyNDhjMTZhZmVhM2U3N2U0Mw
Price:₱25
Description: Para sa ngipin

Product:Colgate Triple Action Toothbrush - Buy 2, Get 1 FREE (Assorted)
url:https://cf.shopee.ph/file/16bc63482b4dab3c4f493abe9b90e918
Price:84
Descripition: Save ka ng pera para sa ngipin

Product:Belo Kojic Micropeeling Toner 60mL Plus Free Extra Moisture Bar
url:https://cf.shopee.ph/file/25f3d9ed5ae2540bb75de117967c2f0c
Price:90
Description: Moisture bar

Product:Safeguard Detox Face and Body Bar Charcoal 108gx3
url:https://cf.shopee.ph/file/bd265be3ad2c19451a60f5cd8995fafe
Price:187
Description: Sabon

Product:+GARD Anti-Dandruff Refreshing Menthol Shampoo 200mL Doy Pack
url:http://cdn.shopify.com/s/files/1/0358/1335/9748/products/gard-hair-care-gard-shampoo-refreshing-menthol-doy-200ml-15937032028292_1024x.png?v=1606166181
Price:80
Description: Anti Dandruff



Canned Goods

Product:Argentina Corned Chicken 150g
url:https://ph-test-11.slatic.net/p/66da1695b544d4f8de9e75aed7103e26.jpg
Price:30
Description Corned Chicken na masarap

Product:Hunt's Pork and Beans Original 230g
url:https://www.dailybuy.store/wp-content/uploads/2020/10/Hunts-Pork-and-Beans-Original-230.jpg
Price:29
Description: Pork na may halong beans

Product:Wow Ulam Adobo Flavor 155g
url:https://cf.shopee.ph/file/386cb670aa6794b6d62465036b89d214
Price:20
Description:Adobo 

Product:Del Monte Fiesta Fruit Cocktail 432g
url:https://cf.shopee.ph/file/fd6f7dbd0a0d420f240725fae1958de3
Price:56
Category: Canned Goods
Description: Fruit Salad

Product:Lucky 7 Carne Norte 100g
url:https://store.iloilosupermart.com/wp-content/uploads/2020/05/302-1.jpg
Price:13
Category:Canned Goods
Description: Carne


Product:La Española Extra Virgin Olive Oil Garlic Flavor 250mL
url:https://cdnimages.logicommerce.cn/985/8410660101481_l.jpg
Price:226
Category:oil, rice, noodles & pasta
Description: Healthy Oil


Product:San Remo Spaghetti Pasta 500g
url:https://asiansnacks.co/wp-content/uploads/2019/04/ShotType1_540x540-1781.jpg
Price:71
Category:oil,rice,noodles & pasta
Description: Spaghetti Pasta


Product:Doritos Nacho Cheese Tortilla Chips 7oz
url:https://i5.walmartimages.ca/images/Enlarge/300/624/6000202300624.jpg
Price:143
Category: snack and sweets
Description: Masarap na snack

Product:Oreo Chocolate Mini Sandwich Cookies in Pouch (10x20.4g)
url:https://cf.shopee.ph/file/84beb28f4f4695ac739a65f823cc3dcc
Price:100
Category:snack and sweets
Description: Masarap na sweets





"productName": 
"image": 
"variant": 
"price":
"description":
wala pang backend kasi dead on arrival
*/