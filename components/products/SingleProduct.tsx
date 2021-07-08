import classes from './SingleProduct.module.scss';
import { FC } from 'react';
import Image  from 'next/image';
import { ProductType } from '../../models/product';
import WishlistHeart from '../utilites/WishlistHeart';

const SingleProduct:FC<ProductType> = (props) =>{


  return <div className={classes.singleProduct}>
    <div className={classes.singleProduct__imgContainer}>
      <Image src={props.imgUrl} width={600} height={600}/>
    </div>
    <div className={classes.singleProduct__content}>
      <h1 className={classes.singleProduct__title}><span>{props.name}</span> <WishlistHeart productId={props.id || '1'}/></h1>
      <p className={classes.singleProduct__price}>Price: {props.price} zł</p>
      <p className={classes.singleProduct__description}>
        <strong>Description:</strong> <br/>
        {props.description.split(/\r?\n/)}
      </p>
      <div className={classes.singleProduct__addToCart}>
        <input type="number" placeholder='Amount' value={1} className={classes.singleProduct__addAmount} />
        <button className={classes.singleProduct__addToCart}>Add to cart</button>
      </div>
    </div>
  </div>
}

export default SingleProduct;