const router = require('express').Router();
let DB = require('../models/db.model');

router.route('/').get((req,res)=>{
    DB.Test.findOne()
    .then(db => res.json(db))
    .catch(err => res.status(400).json('Error: ' + err));
});
// http://25.55.129.106:5000/
router.route('/add').post((req, res) =>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    
    const email = req.body.email;

    const newData = new DB.Test({firstName, lastName,email});

    newData.save()
    .then(db => res.json('New Record Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

/*H:\Trabaho\Web Dev\shop-n-go-capstone\shop-n-go\backend\models\db.model.js:178
        type:mongoose.Schema.type.ObjectId,
                                  ^

TypeError: Cannot read property 'ObjectId' of undefined
    at Object.<anonymous> (H:\Trabaho\Web Dev\shop-n-go-capstone\shop-n-go\backend\models\db.model.js:178:35)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Module.require (internal/modules/cjs/loader.js:1026:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (H:\Trabaho\Web Dev\shop-n-go-capstone\shop-n-go\backend\routes\db.js:2:10)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Module.require (internal/modules/cjs/loader.js:1026:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (H:\Trabaho\Web Dev\shop-n-go-capstone\shop-n-go\backend\server.js:5:18)
    at Module._compile (internal/modules/cjs/loader.js:1138:30) */