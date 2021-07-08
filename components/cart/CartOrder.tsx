import { FC } from 'react';
import classes from './CartOrder.module.scss';


const CartOrder:FC = (props) =>{
  return <div className={classes.cartOrder}>

      <h1 className={classes.cartOrder__header}>
        Total: 2140zł.
      </h1>

      <p className={classes.cartOrder__info}>
        Your name: Andrzej Andrzej
      </p>

      <p className={classes.cartOrder__info}>
        Your email: dasda@gmail.com
      </p>

      <button className={classes.cartOrder__order}>
        Buy Now
      </button>

  </div>
}

export default CartOrder;