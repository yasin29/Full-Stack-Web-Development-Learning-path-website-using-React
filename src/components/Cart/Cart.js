import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    for (const price of cart) {
        total = total + price.credit;
    }
    return (
        <div className="cartStyle">
            <h1>Details</h1>
            <h3>Course Entrolled: {props.cart.length}</h3>
            <h3>Total Entrolled Credits: {total} </h3>
            <ul>
                {cart.map((item) => (
                    <li key={item._id}> Course Name: <b>{item.name}</b></li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;