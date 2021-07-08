import CustomSection from "../../components/utilites/CustomSection";
import ProductItems from "../../components/products/ProductItems";
import { FC } from "react";
import { HomepageProducts } from "..";
import { GetStaticPropsResult } from "next";
import Product, { CarouselProductModel } from "../../models/product";
import connectDB from "../../middleware/mongodb";
import mongoose  from "mongoose";



const WishlistPage:FC<HomepageProducts> = (props) => {
  return <div>
  <CustomSection title="Your Wishlist" id="products">
    <ProductItems products={props.products}/>
  </CustomSection>
</div>
}


export const getStaticProps = async ():Promise<GetStaticPropsResult<HomepageProducts>> =>{
  await connectDB();
  
  const productsFromDb = await Product.find();
  
  await mongoose.connection.close();
  
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


export default WishlistPage;