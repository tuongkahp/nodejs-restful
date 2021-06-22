const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const dbConfig = require("../configs/db.config");

// config path
var path = require('path');

global._require = function (path) { //I call it 'reversal require'
  return require(path.join(__dirname, path));
}

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/models");
const Template = db.template;
const Role = db.role;
const Product = db.product;
// const url = `mongodb://${dbConfig.USER}:${dbConfig.PASS}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}?authSource=admin&w=1`;
const url = `mongodb://34.126.102.192:1001/nodejs-restful`;

db.mongoose
  .connect(url, {
    "auth": {
      "authSource": "admin"
    },
    "user": "admin",
    "pass": "123456Abc@"
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);
require("./src/routes/template.routes")(app);
require("./src/routes/product.routes")(app);
require("./src/routes/category.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      const lstRoles = [
        { name: "user" },
        { name: "moderator" },
        { name: "admin" }
      ]

      lstRoles.forEach(role => {
        new Role(role).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log(`added ${role.name} to roles collection`);
        });
      })
    }
  });

  Template.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      const lstTemplates = [
        { name: 'Thiên đường', code: 'TPL000001', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Hiện đại', code: 'TPL000002', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển', code: 'TPL000003', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 2', code: 'TPL000004', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 3', code: 'TPL000005', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 4', code: 'TPL000006', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 5', code: 'TPL000007', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 6', code: 'TPL000008', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 7', code: 'TPL000009', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 8', code: 'TPL000010', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 9', code: 'TPL000011', imageUrl: '', previewUrl: 'https://twinkleworld.online/' },
        { name: 'Cổ điển 10', code: 'TPL000012', imageUrl: '', previewUrl: 'https://twinkleworld.online/' }
      ]

      lstTemplates.forEach(template => {
        new Template(template).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log(`added ${template.code} to templates collection`);
        })
      })

      // new Template({
      //   name: "Cổ điển",
      //   code: "TP00000002",
      //   imageUrl: '',
      //   previewUrl: 'https://twinkleworld.online/'
      // }).save(err => {
      //   if (err) {
      //     console.log("error", err);
      //   }

      //   console.log("added template2 to templates collection");
      // });
    }
  });

  // Product.estimatedDocumentCount((err, count) => {
  //   if (!err && count === 0) {
  //     const lstProducts = [
  //       {
  //         name: 'Sản phẩm 1', code: 'SP000001',
  //         images: ['https://im.uniqlo.com/images/common/pc/goods/424873/item/56_424873.jpg', 'https://im.uniqlo.com/images/common/pc/goods/424873/item/65_424873.jpg'],
  //         details: [
  //           {
  //             color: 'gray',
  //             size: 'M',
  //             image: 'https://im.uniqlo.com/images/common/pc/goods/424873/item/08_424873.jpg',
  //             inventory: 14
  //           }, {
  //             color: 'red',
  //             size: 'M',
  //             image: 'https://im.uniqlo.com/images/common/pc/goods/424873/item/08_424873.jpg',
  //             inventory: 14
  //           }
  //         ],
  //         isDeleted: false, price: 250000, promotionalPrice: 200000, sold: 125, review: 50, rating: 4.5
  //       }
  //     ]

  //     lstProducts.forEach(x => {
  //       new Product(x).save(err => {
  //         if (err) {
  //           console.log("error", err);
  //         }

  //         console.log(`added ${x.code} to templates collection`);
  //       })
  //     })
  //   }
  // });
}