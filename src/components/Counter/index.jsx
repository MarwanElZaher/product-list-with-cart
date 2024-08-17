import React from "react";
import './style.css'
import ReusableButton from "../ReusableButton";
import { useDispatch, useSelector } from "react-redux";
import { decrementItem, incrementItem } from "../../redux/actions/cartActions";

const Counter = ({ productName }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);


    const handleProductIncrement = () => {
        dispatch(incrementItem(productName))
    }
    const handleProductDecrement = () => {
        dispatch(decrementItem(productName))
    }
    return (
        <div className="counter-main-component">
            <ReusableButton label={`Add 1 more "${productName}" in cart`} iconKey={`${process.env.PUBLIC_URL}/assets/images/icon-increment-quantity.svg`} className="increment-quantity-button" onClick={handleProductIncrement}/>
            <span className="product-added-quantity">{cartItems?.[productName]}</span>
            <ReusableButton label={`Remove 1 ${productName} from cart`} iconKey={`${process.env.PUBLIC_URL}/assets/images/icon-decrement-quantity.svg`} className="decrement-quantity-button" onClick={handleProductDecrement}/>
        </div>
    )
}
export default Counter