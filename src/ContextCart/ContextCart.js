import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const addToCart = (product) => {
       setCartItems((prevItems) => {
        const existingProduct = prevItems.find(item => item.id === product.id);
        if (existingProduct) {
            return prevItems.map(item => 
               item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
        } else {
            return [...prevItems, {...product, quantity: 1}];
        }
       });
    };
    const addToOrders = (product) => {
        const existingOrder = orders.find(item => item.id === product.id);
        if(existingOrder) {
            setOrders(prevOrders => 
                 prevOrders.map(item => 
                   item.id === product.id ? {...item, quantity: item.quantity + 1 } : item
                ) 
            );
            }
        else {
         setOrders(prevOrders => [...prevOrders, {...product, quantity: 1 }]); 
    }
}

    const incrementQuantity = (productId) =>{
        setCartItems((prevItems) => 
            prevItems.map(item => 
               item.id === productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    }
    const decrementQuantity = (productId) =>{
        setCartItems((prevItems) => 
            prevItems.map(item => 
               item.id === productId && item.quantity>1? {...item, quantity: item.quantity - 1} : item
            )
        );
    }

    const deleteProduct = (productId) => {
        setCartItems((prevItems) => 
        prevItems.filter(item => item.id !== productId))
    }
    const incrementOrderQuantity = (productId) =>{
        setOrders((prevOrders) => 
            prevOrders.map(item => 
               item.id === productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    }
    const decrementOrderQuantity = (productId) =>{
        setOrders((prevOrders) => 
            prevOrders.map(item => 
               item.id === productId && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
            )
        );
    }
    return (
        <CartContext.Provider value={{ cartItems, orders, addToCart, addToOrders, incrementQuantity, deleteProduct, incrementOrderQuantity,  decrementQuantity, decrementOrderQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

