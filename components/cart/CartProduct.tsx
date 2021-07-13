import classes from './CartProduct.module.scss';
import { FC, useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '../../store/cart-context';


const CartProduct:FC = (props) =>{
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.cart);


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
    <div className={classes.cartProduct__amount}>
      <span>1</span> 
      <div className={classes.cartProduct__amountButtons}>
        <button className={classes.cartProduct__add} onClick={() => cartCtx.addProductHandler('60e1daf30b37f58524e97608')}>+</button>
        <button className={classes.cartProduct__add}>-</button>
      </div>
    </div>
  </div>

  {/* Usuwanie z bazy */}
  <div className={classes.cartProduct__deleteItem}>
    <button className={classes.cartProduct__delete}>
      <svg className={classes.cartProduct__deleteSVG} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"/>
      </svg>
    </button>
  </div>

</div>
}

export default CartProduct;