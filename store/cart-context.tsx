import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/use-local-storage';

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
  cart: CartProducts,
  addProductHandler: (productId: string, amount?:number) => void ,
  removeProductHandler: (productId: string) => void,
  deleteProductHandler: (productId: string) => void,
}

export const CartContext = React.createContext<CartContextProps>({
  cart: {
    productInCart: [],
    totalPrice: 0,
  },
  addProductHandler: () => {},
  removeProductHandler: () => {},
  deleteProductHandler: () => {},
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
    cart: {
      productInCart: [],
      totalPrice: 0,
    },
    addProductHandler: () => {},
    removeProductHandler: () => {},
    deleteProductHandler: () => {},
  })

  const [localStorageCart, setLocalStorageCart] = useLocalStorage<CartProducts>('cart', {
    productInCart: [],
    totalPrice: 0,
  })

  useEffect(() =>{
    const cartObject = localStorageCart;
    const newCart = {...cart, cart: cartObject};
    setCart(newCart);
  },[])

  const updateLocalStorageCart = () => setLocalStorageCart(() => cart.cart);

  const updateAmountOfExistingProduct = (amount: number, itemIndex: number) => {
    const newCart = {...cart}      
    newCart.cart.productInCart[itemIndex].amount += amount;
    newCart.cart.totalPrice += newCart.cart.productInCart[itemIndex].price * amount;
    setCart(newCart);
  }

  const addProductHandler = async (id:string ,amount?: number) =>{
    let indexOfProductInCart: number;
    const amountToAdd = amount || 1;
    indexOfProductInCart = cart.cart.productInCart.findIndex(product => product.productId === id);
    if(indexOfProductInCart !== -1){
      updateAmountOfExistingProduct(amountToAdd, indexOfProductInCart);
      updateLocalStorageCart()
      return;
    }
    
    if(indexOfProductInCart === -1){
      const productInCart = await fetchProductFromDB(id);
      const priceOfNewProduct = productInCart.price * amountToAdd;
      const newCart = {...cart};
      productInCart.amount = amountToAdd;
      const updatedCartProducts = [...newCart.cart.productInCart, productInCart];    
      newCart.cart.productInCart = updatedCartProducts;
      newCart.cart.totalPrice += priceOfNewProduct;
      setCart(newCart);
      updateLocalStorageCart();
    }
  }

  const removeProductHandler = () => {
    
  }

  const deleteProductHandler = () => {

  }

  const contextValues:CartContextProps = {
    cart: cart.cart,
    addProductHandler: addProductHandler,
    removeProductHandler: removeProductHandler,
    deleteProductHandler: deleteProductHandler,
  }


  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;

}

export default CartContextProvider;