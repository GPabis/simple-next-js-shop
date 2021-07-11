
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongodb';
import mongoose from 'mongoose';
import Product from '../../../models/product';

export const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productId } = req.query;
  const id = mongoose.Types.ObjectId(productId.toString());
  await connectDB();
  const product = await Product.findById(id);
  await mongoose.connection.close();
  res.setHeader('Content-Type', 'application/json');
  res.send(product);
}

export default getProduct;