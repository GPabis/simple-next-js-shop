import classes from './CartTable.module.scss';
import { FC } from 'react';

const CartTable:FC = (props) =>{
  return <div className={classes.cartTable}>

    <div className={classes.cartTable__head}>
      <div className={`${classes.cartTable__label} ${classes.cartTable__labelOne}`}>
        <p className={classes.cartTable__labelText}>Product</p>
      </div>
      <div className={`${classes.cartTable__label} ${classes.cartTable__labelTwo}`}>
        <p className={classes.cartTable__labelText}>Name</p>
      </div>
      <div className={`${classes.cartTable__label} ${classes.cartTable__labelThree}`}>
        <p className={classes.cartTable__labelText}>Amount</p>
      </div>
      <div className={`${classes.cartTable__label} ${classes.cartTable__labelFour}`}>
        <p className={classes.cartTable__labelText}>Delete</p>
      </div>
    </div>

    {props.children}

  </div>
}

export default CartTable;