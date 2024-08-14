import React from "react";
import './style.css'
import ReusableButton from "../ReusableButton";
import { ReactSVG } from "react-svg";

const Cart = () => {
    return (
        <div className="cart-main-container">
        <div className="cart-header">
            <p>{`Your Cart (${0})`}</p>
            </div>
            {!true ?
             <>
                <div className="cart-body">
                    <div className="cart-total">
                        <div className="cart-total-label">
                            Order Total
                        </div>
                        <div className="cart-total-value">
                            $0
                        </div>
                    </div>
                </div>
            <div className="cart-footer">
                <div className="delivery-slogan">
                    <ReactSVG src='/assets/images/icon-carbon-neutral.svg' alt="icon-carbon-neutral-icon" />
                    <p className="delivery-description">
                        This is a <span>carbon-neutral</span> delivery
                    </p>
                </div>
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