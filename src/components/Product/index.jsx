import React from "react";
import './style.css'
import ReusableButton from "../ReusableButton";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem } from "../../redux/actions/cartActions";
import Counter from "../Counter";

const Product = ({ image, name, category, price }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleAddingProductToCart = () => {
        dispatch(incrementItem(name))
    }

    return (
    <>
        <div className={cartItems[name] ?"product-head active" : "product-head"}>
            <picture>
                <source media="(min-width: 1024px)" srcSet={image.desktop} />
                <source media="(min-width: 768px)" srcSet={image.tablet} />
                <source media="(min-width: 480px)" srcSet={image.mobile} />
                <img src={image.thumbnail} alt={name} className="product-image" />
                </picture>
                {cartItems[name] ?
                    <Counter productName={name}/> :
                    <ReusableButton
                    iconKey="/assets/images/icon-add-to-cart.svg"
                    onClick={handleAddingProductToCart }
                    label="Add to Cart"
                    className="add-to-cart-button"
                />}
        </div>
        <div className="product-body">
            <span className="product-category">{category}</span>
            <span className="product-name">{name}</span>
            <span className="product-price">{`$ ${price}`}</span>
    
            </div>
        </>
    )
}
export default Product