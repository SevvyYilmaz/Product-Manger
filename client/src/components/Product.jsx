import React from "react";

const Product = () => {
    return (
        <div>
            <h1>Product Manager</h1>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default Product;
