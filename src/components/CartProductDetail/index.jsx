import React from "react";
import { useDispatch } from "react-redux";
import ReusableButton from "../ReusableButton";
import './style.css'
import { removeFromCart } from "../../redux/actions/cartActions";
import { getImageForItem } from "../../utils";

const CartProductDetail = ({ priceMap, cartItems, totalPrice, showProductImage, showPriceLarge }) => {
    const dispatch = useDispatch();
    const products = Object.entries(cartItems);

    return (
        <div className="cart-product-detail">
            {products.map(([productName, productQuantity]) => {
                return (
                    <div key={productName} className="cart-product-item">
                        {showPriceLarge &&<div className="cart-product-total-large"> {`$${(productQuantity * priceMap[productName]).toFixed(2)}`}</div>}                        <div className="cart-product-detail">
                            <div className="cart-product-name"> {productName}</div>
                                <div className="cart-product-description"> 
                                    <div className="cart-product-quantity">{`${productQuantity}x`}</div>
                                    <div className="cart-product-price">{` @ ${priceMap[productName].toFixed(2)}`}</div>
                                    <div className="cart-product-total"> {`$${(productQuantity * priceMap[productName]).toFixed(2)}`}</div>
                            </div>
                        </div>
                        {showProductImage ?
                        <div className="product-img">
                                <img src={getImageForItem(productName)} alt={ productName} />
                        </div>
                            :
                        <ReusableButton iconKey="/assets/images/icon-remove-item.svg" className="remove-product-cart" label={`Remove ${productName}`} onClick={() => dispatch(removeFromCart(productName))} />
                          
                        }
                    </div>
                )

            })}
           <div className="cart-total">
                 <div className="cart-total-label">
                       Order Total
                  </div>
                    <div className="cart-total-value">
                          {`$ ${totalPrice}`}
                   </div>
                </div>
        </div>
    );
};

export default CartProductDetail;
