

import React, { useContext } from "react";
import { CartContext } from "../ContextCart/ContextCart";
import { Link } from "react-router-dom";
import './OrderItems.css';

function Orders() {
    const { orders } = useContext(CartContext);

    return (
        <div className="orders-container">
            <h2 className="orders-header">Orders</h2>
          
            {orders.length === 0 ? (
                <p className="no-orders-message">No Orders</p>
            ) : (
                <ul className="orders-list">
                    {orders.map((item, index) => (
                        <div key={index} className="order-item">
                            <img src={item.image} alt={item.title} className="order-item-image" />
                            <div className="order-item-details">
                                <span className="order-item-title">{item.title}</span> <br />
                                <span className="order-item-price">&#8377;{item.price}</span> <br />
                                <span className="order-item-total">Total: &#8377;{item.price * item.quantity}</span>
                                <span className="order-item-quantity">Quantity: {item.quantity}</span>
                            </div>
                        </div>
                    ))}
                </ul>
            )}

              <Link to='/'>
                <div className="back-btn-container">
                    <button className="back-btn">Back</button>
                </div>
            </Link>
        </div>
    );
}

export default Orders;

