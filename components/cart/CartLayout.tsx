
import { FC, useContext } from 'react';
import classes from './CartLayout.module.scss';
import CartProduct from './CartProduct';
import CartTable from './CartTable';
import CartOrder from './CartOrder';
import { CartContext } from '../../store/cart-context';

const CartLayout:FC = () => {
  const cartCtx = useContext(CartContext);
  const productsInCart = cartCtx.cart.productInCart;

  return <section className={classes.cartLayout}>
    <div className={classes.cartLayout__container}>
      <CartTable>
        {productsInCart.length && productsInCart.map(product => <CartProduct 
          productId={product.productId}
          productName={product.productName}
          productImg={product.productImg}
          price={product.price}
          amount={product.amount}
          key={product.productId}
        />)}
      </CartTable>
      <CartOrder/>
    </div>
  </section>
}

export default CartLayout;