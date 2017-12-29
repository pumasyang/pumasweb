import React from "react";
import ProductList from "./product-list";
import Bottom from "./bottom";

class Product extends React.Component {
    render() {
        return (
            <div className='user-info'>
                <ProductList />
                <Bottom />
            </div>
        );
    };
}

module.exports = Product;
