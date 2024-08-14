import React from "react";
import './style.css'
import ReusableButton from "../ReusableButton";

const Counter = ({ productName }) => {
    //to do -> take the product name get the quantity which is saved in redux inc or deinc then update the cart
    const handleProductIncrement = () => {
        
    }
    const handleProductDecrement = () => {
        
    }
    return (
        <div className="counter-main-component">
            <ReusableButton iconKey="/assets/images/icon-increment-quantity.svg" className="increment-quantity-button"/>
            <span className="product-added-quantity">100</span>
            <ReusableButton iconKey="/assets/images/icon-decrement-quantity.svg" className="decrement-quantity-button"/>
        </div>
    )
}
export default Counter