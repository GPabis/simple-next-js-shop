import { LoremIpsum } from "lorem-ipsum"
import { ProductType } from "../models/product"

const generateProducts = (numberOfProducts:number) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph:{
      max: 8,
      min: 4
    },
    wordsPerSentence:{
      max: 16,
      min: 4,
    }
  })

  const loremTitle = new LoremIpsum({
    wordsPerSentence:{
      max: 6,
      min: 2,
    }
  })

  const products: ProductType[] = [];
  const imgs:string[] = [
    "https://i.ibb.co/MZVzGWY/product13.jpg",
    "https://i.ibb.co/zVF0R2w/product12.jpg", 
    "https://i.ibb.co/0FVMJWX/product11.jpg",
    "https://i.ibb.co/MGdL54C/product10.jpg",
    "https://i.ibb.co/mHLK1rP/product9.jpg", 
    "https://i.ibb.co/qMtGRJG/product8.jpg", 
    "https://i.ibb.co/Z1cvk5P/product7.jpg", 
    "https://i.ibb.co/wgLjBn9/product6.jpg", 
    "https://i.ibb.co/5n26qFh/product5.jpg", 
    "https://i.ibb.co/7ysrLPS/product4.jpg", 
    "https://i.ibb.co/XkLWLgS/product3.jpg", 
    "https://i.ibb.co/MDXkbxw/product2.jpg", 
    "https://i.ibb.co/PxpXDrw/product.jpg",
  ]

  while(numberOfProducts > products.length){
    let imgNumber = Math.floor(Math.random() * (Math.floor(imgs.length) - Math.ceil(0) ) + Math.ceil(0));
    let price = Math.round(Math.floor(Math.random() * (Math.floor(10000) - Math.ceil(999)) + Math.ceil(999))/100)*100;

    products.push({
      name: loremTitle.generateSentences(1),
      imgUrl: imgs[imgNumber],
      description: lorem.generateParagraphs(2),
      shortDescription: lorem.generateSentences(3),
      price: price,
    })
  }

  return products;
}

export default generateProducts;