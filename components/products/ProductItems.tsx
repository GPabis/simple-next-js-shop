
import ProductOverview from './ProductOverview';
import classes from './ProductItems.module.scss';
import { FC } from 'react';
import { HomepageProducts } from '../../pages';

const ProductItems:FC<HomepageProducts> = (props) => {
  return <section className={classes.productItems}>
    {props.products.map(product => <ProductOverview key={product.id} {...product}/>)}
  </section>
}

export default ProductItems;