import React, { useEffect } from 'react'
import { createContext,useState } from 'react'; 
import { useLocation } from 'react-router-dom';


export const Context = createContext ();
const AppContext = ({children}) => {
    const [categories,setCategories] = useState();
    const [products,setProducts] = useState();
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartSubTotal,setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(()  => {
        window.scrollTo(0,0);
    },[location])  //This window.scrollyto used for when ever add items, the page will show on header


    useEffect (() => {
         let count = 0;
         cartItems.map((item)  => (count += item.attributes.quantity))
         setCartCount(count);


        let subTotal = 0;
        cartItems.map(item => subTotal += item.attributes.price * item.attributes.quantity)
        setCartSubTotal(subTotal)

    },[cartItems]);
    const handleAddToCart = (product,quantity) => {
        let items = [...cartItems]; //its spread operator method to find the itens in cart
        let index = items.findIndex(p=> p.id === product.id) //we will find the product
        if (index !== -1) {  //if product is -1 then product is already exists 
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity
            items = [...items,product]
        }
        setCartItems(items);
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems]
        items = items.filter(p => p.id !== product.id);
        setCartItems(items);
    }
    const handleCartProductQuantity = (type,product) => {
        let items = [...cartItems]; //its spread operator method to find the itens in cart
        let index = items.findIndex(p=> p.id === product.id)
        if (type === "inc") {
            items[index].attributes.quantity += 1
        } else if (type === 'dec') {
            if (items[index].attributes.quantity === 1) return;
               items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    }
    

    return (
        <Context.Provider 
        value ={{
          categories,
          setCategories,
          products,
          setProducts,
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
          cartSubTotal,
          setCartSubTotal,
          handleAddToCart,
          handleRemoveFromCart,
          handleCartProductQuantity

          }}
         >
            {children}
        </Context.Provider>
    )
}

export default AppContext;