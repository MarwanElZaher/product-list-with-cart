import React from "react";
import './style.css'
import ReusableButton from "../ReusableButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Counter from "../Counter";

const Product = ({ image, name, category, price }) => {
    const dispatch = useDispatch();

    const handleAddingProductToCart = () => {
        const product = {
            product: name,
            quantity: 1,
        };
        dispatch(addToCart(product))
    }

    return (
    <>
        <div className="product-head">
            <picture>
                <source media="(min-width: 1024px)" srcSet={image.desktop} />
                <source media="(min-width: 768px)" srcSet={image.tablet} />
                <source media="(min-width: 480px)" srcSet={image.mobile} />
                <img src={image.thumbnail} alt={name} className="product-image" />
                </picture>
                {/* after adding product to card the addtocartbutton to be hidden then -> counter to be appeared always check that the product is not in redux*/}
                {true ?
                    <ReusableButton
                    iconKey="/assets/images/icon-add-to-cart.svg"
                    onClick={handleAddingProductToCart }
                    label="Add to Cart"
                    className="add-to-cart-button"
                />
                    : <Counter productName={name}/>}
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