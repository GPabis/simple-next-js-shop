import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

export type ProductType = {
  id?: string,
  name: string,
  imgUrl: string,
  shortDescription: string,
  description: string,
  price: number,
}

export type CarouselProductModel = {
  name: string,
  id: string,
  imgUrl: string,
  shortDescription: string,
  price: number
}

const productSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
  },
  imgUrl:{
    type: String, 
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  }
});

const Product = mongoose.models.Product || mongoose.model<ProductType>('Product', productSchema);

export default Product;