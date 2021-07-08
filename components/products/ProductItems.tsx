
import CarouselProduct from '../utilites/CarouselProduct';
import classes from './ProductItems.module.scss';
import { FC } from 'react';
import { HomepageProducts } from '../../pages';

const ProductItems:FC<HomepageProducts> = (props) => {
  return <section className={classes.productItems}>
    {props.products.map(product => <CarouselProduct key={product.id} {...product}/>)}
  </section>
}

export default ProductItems;