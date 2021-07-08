
import { FC } from 'react';
import classes from './CartLayout.module.scss';
import CartProduct from './CartProduct';
import CartTable from './CartTable';
import CartOrder from './CartOrder';

const CartLayout:FC = () => {
  return <section className={classes.cartLayout}>
    <div className={classes.cartLayout__container}>
      <CartTable>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
      </CartTable>
      <CartOrder/>
    </div>
  </section>
}

export default CartLayout;