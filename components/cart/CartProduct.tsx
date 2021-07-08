import classes from './CartProduct.module.scss';
import { FC } from 'react';
import Image from 'next/image';


const CartProduct:FC = (props) =>{
  return <div className={classes.cartProduct}>

  {/* Props.url , Props.Img, Dostosować wielkość obrazka */}
  <div className={classes.cartProduct__imgContainer}>
    <a href="#">
      <Image src="https://i.ibb.co/wgLjBn9/product6.jpg" height={136} width={150}/>
    </a>
  </div>

  {/* Props.name, props.price, props.url */}
  <div className={classes.cartProduct__info}>
    <h4 className={classes.cartProduct__name}>
      <a href="" className={classes.cartProduct__nameLink}>Lorem ipsum amath</a>
    </h4>
    <p className={classes.cartProduct__price}>
      999 zł
    </p>
  </div>

  {/* Ilość produktów z bazy */}
  <div className={classes.cartProduct__amountContainer}>
    <p className={classes.cartProduct__amount}>
      <span>1</span> 
      <button className={classes.cartProduct__add}>+</button>
      <button className={classes.cartProduct__add}>-</button>
    </p>
  </div>

  {/* Usuwanie z bazy */}
  <div className={classes.cartProduct__deleteItem}>
    <button className={classes.cartProduct__delete}>DELETE</button>
  </div>

</div>
}

export default CartProduct;