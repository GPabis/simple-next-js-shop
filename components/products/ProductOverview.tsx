import classes from './ProductOverview.module.scss';
import Image from 'next/image';
import WishlistHeart from '../utilites/WishlistHeart';
import Link from 'next/link';
import { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

type ProductOverviewModel = {
  name: string,
  id: string,
  imgUrl: string,
  shortDescription: string,
  price: number
}

const ProductOverview:FC<ProductOverviewModel> = (props) =>{

  const {user, error, isLoading} = useUser();

  return (
    <div className={classes.product}>

      <div className={classes.product__imgContainer}>
        <Image src={props.imgUrl} height={236} width={250}/>
      </div>

      <h3 className={classes.product__name}>
        {props.name}
        {user && <WishlistHeart productId={props.id}/>}
      </h3>
      
      <p className={classes.product__price}>
       {props.price} zł
      </p>

      <p className={classes.product__excerpt}>
        {props.shortDescription}
      </p>

      {user && 
      <button className={classes.product__btn}>
        Add to cart
      </button>}

      <Link href={`/products/${props.id}`}>
        <span className={classes.product__link}>Read More</span>
      </Link>

    </div>
  )
}

export default ProductOverview;