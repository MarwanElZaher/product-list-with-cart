import React from "react";
import { useSelector } from "react-redux";
import './style.css'
import ReusableButton from "../ReusableButton";
import { ReactSVG } from "react-svg";
import { data } from '../../constants'
import CartProductDetail from "../CartProductDetail";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items)

    const priceMap = data.reduce((acc, item) => {
        acc[item.name] = item.price;
        return acc;
    }, {});
    
    const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

    const totalPrice = Object.entries(cartItems).reduce((total, [itemName, quantity]) => {
        const itemPrice = priceMap[itemName] || 0;
        return total + (itemPrice * quantity);
    }, 0).toFixed(2);


    return (
        <div className="cart-main-container">
        <div className="cart-header">
            <p>{`Your Cart (${totalQuantity})`}</p>
            </div>
            {totalQuantity > 0 ?
             <>
                <div className="cart-body">
                     <CartProductDetail priceMap={priceMap} cartItems={cartItems} />        
                    <div className="cart-total">
                        <div className="cart-total-label">
                                Order Total
                        </div>
                        <div className="cart-total-value">
                                {`$ ${totalPrice}`}
                        </div>
                    </div>
                </div>
                <div className="delivery-slogan">
                    <ReactSVG src='/assets/images/icon-carbon-neutral.svg' alt="icon-carbon-neutral-icon" />
                    <p className="delivery-description">
                        This is a <span>carbon-neutral</span> delivery
                    </p>
                </div>    
                 <div className="cart-footer">

                  <ReusableButton label="Confirm Order" className="confirm-order-button"/>
                </div>
                </> :
                <div className="empty-cart">
                    <ReactSVG src="/assets/images/illustration-empty-cart.svg" alt="illustration-empty-cart" />
                    <p className="empty-cart-msg">Your added items would appear here</p>
                </div>
            }

            </div>
    )
}
export default Cart