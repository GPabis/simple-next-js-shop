import { useRouter } from "next/dist/client/router";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Product, { ProductType } from "../../models/product";
import { FC } from "react";
import mongoose from 'mongoose';
import Image from "next/image";
import connectDB from "../../middleware/mongodb";
import SingleProduct from "../../components/products/SingleProduct";

const ProductPage:FC<ProductType> = (props) =>{

  return <SingleProduct 
            name={props.name} 
            imgUrl={props.imgUrl} 
            price={props.price} 
            id={props.id} 
            shortDescription={props.shortDescription} 
            description={props.description}
          />
}

export const getStaticPaths = async () => {
  await connectDB();
  const products = await Product.find();
  await mongoose.connection.close();
  const paths = await products.map(product => {
    let id = product._id.toString();
    return {
      params: {productId: id}
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context:GetStaticPropsContext):Promise<GetStaticPropsResult<ProductType>> =>{
  await connectDB();
  const productsFromDb = await Product.findById(context.params!.productId );
  await mongoose.connection.close();

  return {
    props:{
      id: productsFromDb._id.toString(),
      name: productsFromDb.name,
      shortDescription: productsFromDb.shortDescription,
      description: productsFromDb.description,
      imgUrl: productsFromDb.imgUrl,
      price: productsFromDb.price,
    },
  }

}

export default ProductPage;