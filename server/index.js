const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', 'https://ecommerce-admin-072024front.vercel.app')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}  


const mongoURI = 'mongodb+srv://dhinaashwin11:Mongodbpassword@shopstopcluster.d9uxour.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ShopStopCluster';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const itemSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  main_image: { type: String, required: true },
  image_2: { type: String },
  image_3: { type: String },
  image_4: { type: String },
  category: { type: String, required: true },
  new_product: { type: Boolean, required: true },
  discount: { type: Boolean, required: true },
  gender: { type: String, required: true },
  fit: { type: String, required: true },
  fabric: { type: String, required: true },
  sleeve: { type: String, required: true },
  color: { type: String, required: true },
  design: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  sizes: { type: Object, required: true },
});

const Item = mongoose.model('allproducts', itemSchema);

app.get('/', (req, res) => {
  res.send('Connected');
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Failed to fetch items');
  }
});

app.get('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).send('Failed to fetch item');
  }
});

app.post('/upload', async (req, res) => {
  const { id, name, description, new_price, old_price, main_image, image_2, image_3, image_4, category, new_product, discount, gender, fit, fabric, sleeve, color, design, sizes } = req.body;

  const newItem = new Item({
    id,
    name,
    description,
    new_price,
    old_price,
    main_image,
    image_2,
    image_3,
    image_4,
    category,
    new_product,
    discount,
    gender,
    fit,
    fabric,
    sleeve,
    color,
    design,
    sizes,
  });

  try {
    await newItem.save();
    res.status(201).send('Item created successfully');
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).send('Failed to create item');
  }
});

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.status(200).send('Item deleted');
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).send('Failed to delete item');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
