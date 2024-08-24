

import React, { useContext } from 'react';
import { CartContext } from '../ContextCart/ContextCart';
import './Cart.css';

function Cart() {
    const { cartItems, incrementQuantity, deleteProduct, decrementQuantity } = useContext(CartContext);

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p className='empty-cart-message'>No items in Cart</p>
            ) : (
                <ul className='cart-items-list'>
                    {cartItems.map((item, index) => (
                        <div key={index} className='cart-item'>
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className='cart-item-details'>
                                <span className="cart-item-title">{item.title}</span> <br />
                                <span className="cart-item-price">&#8377;{item.price}</span> <br />
                                <span className="cart-item-total">Total: &#8377;{item.price * item.quantity}</span>
                                <div className='cart-item-actions'>
                                    <button className='quantity-btn' onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span className='cart-item-quantity'>{item.quantity}</span>
                                    <button className='quantity-btn' onClick={() => incrementQuantity(item.id)}>+</button>
                                    <button className='delete-btn' onClick={() => deleteProduct(item.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;






