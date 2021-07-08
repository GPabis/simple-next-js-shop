import { NextApiResponse, NextApiRequest} from "next";
import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";
import mongoose from 'mongoose';

const getProducts = async (req:NextApiRequest,res:NextApiResponse) =>{
  await connectDB();
  const productsFromDb = await Product.find();
  await mongoose.connection.close();
  const data = await productsFromDb.map(doc =>{
    return {
      id: doc._id,
      name: doc.name,
      imgUrl: doc.imgUrl,
      shortDescription: doc.shortDescription,
      price: doc.price,
    }
  })
  return res.status(200).send(data)

}

export default getProducts;