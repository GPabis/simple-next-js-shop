import Product, {ProductType} from "../../../models/product";
import connectDB from "../../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import generateProducts from "../../../helpers/productGenerator";
import  mongoose  from "mongoose";


const handler = async (req:NextApiRequest, res:NextApiResponse) =>{
  if(!mongoose.models.Product){
    const productSample:ProductType[]= generateProducts(29);
    await connectDB();
    const products = productSample.map(sample => new Product(sample));
    const productCreated = await products.map(product => product.save());
    await mongoose.connection.close();
    return res.status(200).send(productCreated)
  } else {
    await mongoose.connection.close();
    res.status(200).redirect("/");
  }
}

export default handler;