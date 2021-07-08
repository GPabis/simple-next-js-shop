import ProductItems from '../../components/products/ProductItems';
import { CarouselProductModel } from '../../models/product';
import { HomepageProducts } from '..';
import Product from '../../models/product';
import { GetStaticPropsResult } from 'next';
import { FC } from 'react';
import CustomSection from '../../components/utilites/CustomSection';
import  mongoose  from 'mongoose';
import connectDB from '../../middleware/mongodb';


const ProductPage:FC<HomepageProducts> = (props) =>{
  return <div>
      <CustomSection title="Nasze Produkty" id="products">
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

export default ProductPage;