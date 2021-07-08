import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FC } from "react";
import { HomepageProducts } from "../../pages";
import ProductOverview from "./ProductOverview";



const ProductsCarousel:FC<HomepageProducts> = (props) =>{
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1300},
      items: 5,
    },
    laptop: {
      breakpoint: {max: 1300, min: 992},
      items: 4,
    },
    tablet:{
      breakpoint: {max: 992, min: 620},
      items: 2
    },
    mobile:{
      breakpoint: {max: 620, min: 0},
      items: 1
    }
  }

  return <Carousel
  responsive={responsive}
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
>
  {props.products.map(product => <ProductOverview key={product.id} {...product}/>)}
  
</Carousel>;
}

export default ProductsCarousel;