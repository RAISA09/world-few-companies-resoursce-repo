import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let revenue = 0;
    let name = '';
    for(const company of cart) {
        revenue = revenue + company.revenue;
        name =  name +  company.name + ',';
    }
    return (
        <div className="card-style">
           <h2>Companies added:{props.cart.length}</h2>
           <h2>Total Revenue: ${revenue}</h2>
          <div>
             <h4>{name}</h4> 
          </div>
          
        </div>
    );
};

export default Cart;