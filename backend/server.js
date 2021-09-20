import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('api is running');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`server running on Port ${PORT} in mode ${process.env.NODE_ENV}`)
);
