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
                    onClick={() => { }}
                    label="Add to Cart"
                    className="add-to-cart-button"
                />    
                <button title="Add to Cart" className="add-to-cart-button">Add to Cart</button>
        </div>
        <div className="product-body">
            <p className="product-category">{category}</p>
            <p className="product-name">{name}</p>
            <p className="product-price">{ `$ ${price}`}</p>
    
            </div>
        </>
    )
}
export default Product