import React, {useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/Product";
import product from "../product/Product";
import styles from './Products.module.css'


const Products = () => {

    const [products, setProducts] = useState<IProductProps[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => {
                setProducts(products);
            });
    }, [])
    return (
        <div className={styles.products}>
            {products.map(({
                               id,
                               title,
                               description,
                               price,
                               discountPercentage,
                               rating,
                               stock,
                               brand,
                               category,
                               thumbnail,
                               images
                           }) =>
                (<Product key={id} id={id} title={title} description={description} price={price}
                          discountPercentage={discountPercentage} rating={rating} stock={stock} brand={brand}
                          category={category} thumbnail={thumbnail} images={images}/>)
            )}
        </div>
    );
};

export default Products;