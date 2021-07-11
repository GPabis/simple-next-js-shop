import mitt from 'next/dist/next-server/lib/mitt';
import React, { useState } from 'react';
import {ProductType} from '../models/product';

type CartProduct = {
  productId: string,
  productName: string,
  productImg: string,
  price: number,
  amount: number,
}

type CartProducts = {
  productInCart: CartProduct[]
  totalPrice: number,
}

type CartContextProps = {
  cart: CartProducts | null,
  addProduct: (productId: string, amount?:number) => void ,
  removeProduct: (productId: string) => void,
  deleteProduct: (productId: string) => void,
}

export const CartContext = React.createContext<CartContextProps>({
  cart: null,
  addProduct: () => {},
  removeProduct: () => {},
  deleteProduct: () => {},
});

const fetchProductFromDB = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await data.json();
  const cartProduct:CartProduct= {
    productId: product._id.toString(),
    productName: product.name,
    productImg: product.imgUrl,
    price: product.price,
    amount: 0,
  }
  return cartProduct || null;
}

const CartContextProvider:React.FC = ({children}) =>{

  const [cart, setCart] = useState<CartContextProps>({
    cart: null,
    addProduct: () => {},
    removeProduct: () => {},
    deleteProduct: () => {},
  })

  let localstorageCart;

  if (typeof window !== "undefined") {
    localstorageCart = localStorage.getItem('simpleShopCart');
  }


  if(localstorageCart) {
    const cartObject = JSON.parse(localstorageCart) as CartProducts;
    const newCart = {...cart, cart: cartObject};
    setCart(newCart);
  }

  const addProduct = async (id:string ,amount?: number) =>{
    let indexOfProductInCart: number | undefined;
    let amountToAdd = amount || 1;
    if(cart.cart){
      indexOfProductInCart = cart.cart.productInCart.findIndex(product => product.productId === id);

      if(indexOfProductInCart >= 0){
        const newCart = {...cart}
        if(newCart.cart?.productInCart) {
          newCart.cart.productInCart[indexOfProductInCart].amount += amountToAdd;
          newCart.cart.totalPrice += newCart.cart.productInCart[indexOfProductInCart].price * amountToAdd;
        }
        setCart(newCart);
        return;
      }
    } 

    if(!indexOfProductInCart || indexOfProductInCart < 0){
      const productInCart = await fetchProductFromDB(id);
      productInCart.amount = amountToAdd;
      const newCart = {...cart};
      if(newCart.cart){
        newCart.cart.productInCart = [...newCart.cart.productInCart, productInCart];
        newCart.cart.totalPrice += productInCart.price * amountToAdd;
      } else{
        newCart.cart = {
          productInCart: [productInCart],
          totalPrice: productInCart.price * amountToAdd,
        }
      }
      setCart(newCart);
    }
  }

  const removeProuct = () => {
    
  }

  const deleteProduct = () => {

  }

  const contextValues:CartContextProps = {
    cart: cart.cart,
    addProduct: addProduct,
    removeProduct: removeProuct,
    deleteProduct: deleteProduct,
  }


  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;

}

export default CartContextProvider;