import React from "react";
import {data} from '../../constants'
import Product from '../Product/index'
import "./style.css"
const ProductList = () => {
    return (
        <div className="products-container">
            {data?.map(product => (
                <li
                    className="product"
                    key={product.name}
                >
                    <Product
                        image={product.image}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                    />
                </li>
        )) }
        </div>
    )
}
export default ProductList