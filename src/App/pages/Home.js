import React from 'react';

const Home = ({ products, productsLoading, productError }) => {
    if (productsLoading) {
        return <div>Loading products...</div>;
    }

    if (productError) {
        return <div>Error: {productError}</div>;
    }
    return (
        <div>
            <h1>Home</h1>
            {products && products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No products to display</div>
            )}
        </div>
    )
}

export default Home