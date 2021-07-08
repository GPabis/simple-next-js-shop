import { FC } from "react";
import Hero from "../components/front-page/Hero";
import CustomSection from "../components/utilites/CustomSection";
import { CarouselProductModel } from "../models/product";
import { useUser } from '@auth0/nextjs-auth0';
import Product, {ProductType} from "../models/product";
import { GetStaticPropsResult, NextApiResponse, NextApiRequest } from "next";
import ProductsCarousel from "../components/utilites/ProductsCarousel";
import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb";

export type HomepageProducts = {
  products: CarouselProductModel[]
}

const Home:FC<HomepageProducts>= (props) => {
  return (
    <>
      <Hero/>
      <CustomSection title="Najnowsze Produkty" id="products">
        <ProductsCarousel products={props.products} />
      </CustomSection>
    </>
  )
}

export const getStaticProps = async ():Promise<GetStaticPropsResult<HomepageProducts>> =>{
  await connectDB();
  const productsFromDb = await Product.find().limit(10);
  await mongoose.connection.close();
  console.log(mongoose.connection.readyState);
  const data:CarouselProductModel[] = await productsFromDb.map(doc =>{
    return {
      id: doc._id.toString(),
      name: doc.name,
      shortDescription: doc.shortDescription,
      imgUrl: doc.imgUrl,
      price: doc.price,
    }
  })

  return {
    props:{
      products: data,
    },
  }

}


export default Home;

