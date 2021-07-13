import { FC, useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import classes from './CartOrder.module.scss';
import { useUser } from '@auth0/nextjs-auth0';


const CartOrder:FC = (props) =>{
  const { user, error, isLoading } = useUser();
  const cartCtx = useContext(CartContext);

  return <div className={classes.cartOrder}>

      <h1 className={classes.cartOrder__header}>
        Total: {cartCtx.cart.totalPrice} zł.
      </h1>

      <p className={classes.cartOrder__info}>
        Your name: {user?.nickname}
      </p>

      <p className={classes.cartOrder__info}>
        Your email: {user?.name}
      </p>

      <button className={classes.cartOrder__order}>
        Buy Now
      </button>

  </div>
}

export default CartOrder;