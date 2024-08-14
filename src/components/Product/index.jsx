import React from "react";
import './style.css'
import ReusableButton from "../ReusableButton";

const Product = ({image, name, category, price}) => {
    return (
    <>
        <div className="product-head">
            <picture>
                <source media="(min-width: 1024px)" srcSet={image.desktop} />
                <source media="(min-width: 768px)" srcSet={image.tablet} />
                <source media="(min-width: 480px)" srcSet={image.mobile} />
                <img src={image.thumbnail} alt={name} className="product-image" />
            </picture>
                <ReusableButton
                    iconKey="/assets/images/icon-add-to-cart.svg"
                    onClick={() => { }}
                    label="Add to Cart"
                    className="add-to-cart-button"
                />    
        </div>
        <div className="product-body">
            <span className="product-category">{category}</span>
            <span className="product-name">{name}</span>
            <span className="product-price">{ `$ ${price}`}</span>
    
            </div>
        </>
    )
}
export default Product