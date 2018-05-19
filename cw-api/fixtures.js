const mongoose = require('mongoose');
const config = require('./config');

const Product = require('./models/Product');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;
const  collections = ['categories', 'products'];

db.once('open', async () => {

  collections.forEach(async collectionName => {
    try {
      await db.dropCollection(collectionName);
    } catch (e) {
      console.log(`Collection ${collectionName} did not exist in DB`);
    }
  });

  const [allItems, computers, mobilePhones] = await Category.create({
    title: 'All items',
    description: 'All items in market'
}, {
    title: 'Computers',
    description: 'Some computers'
  }, {
    title: 'Mobile phones',
    description: 'Some mobile phones'
  });

  await Product.create({
    title: 'HP ProBook 4530s',
    price: 300,
    description: 'Very old computer',
    category: [computers._id, allItems],
    image: '1vcwvO_sbWVHMz0_pBf~f.jpg'
  }, {
    title: 'LG Nexus 5',
    price: 110,
    desciption: 'Some kinda description',
    category: [mobilePhones._id, allItems],
    image: '6WZfISbrlXiirvT1lWZkV.jpg'
  });

  db.close();
});