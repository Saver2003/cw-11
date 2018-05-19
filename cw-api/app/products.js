const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Product = require('../models/Product');

const config = require('../config');
const auth = require('../auth');
const User = require('../models/User');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = () => {
  router.get('/', (req, res) => {
    Product.find()
      .then(results => res.send(results))
      .catch(() => res.sendStatus(500))
  });

  router.post('/', [auth, upload.single('image')], async (req, res) => {
    const token = req.get('Token');

    const user = await User.findOne({token});
    const data = req.body;
    console.log(req.body);
    if (!user) {
      res.status(401).send({error: 'user not authorised!'})
    } else {

      if (req.file) {
        data.image = req.file.filename;
      } else {
        data.image = null;
      }

      const productData = {
        title: data.title,
        description: data.description,
        image: data.image,
        user: req.user._id,
        price: data.price,
        category: data.category
      };
      console.log(productData);
      const product = new Product(productData);
      product.save()
        .then(product => res.send(product))
        .catch(error => res.status(400).send(error));
    }
  });

  return router;

};

module.exports = createRouter;