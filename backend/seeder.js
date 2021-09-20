import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany(); // not passing any params will delete all
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); // array
    const adminUser = createdUsers[0]._id; // [first one is admin in our sample data]

    // basically sample products will all have the id of the user which is admin ,
    //so copying all the contents of the product object and adding the admin user to it
    // remember in our product model , user is an objectId
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('data imported');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany(); // not passing any params will delete all
    await Product.deleteMany();
    await User.deleteMany();

    console.log('data destroyed');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

/**
 * for import => node backend/seeder
 * for deleting data => node backedn/seeder -d
 * this -d is the 2nd argument , we can have it with argv[2] from process
 */
