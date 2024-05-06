import React, {FC} from 'react';
import styles from './Product.module.css'

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const Product: FC<IProductProps> = ({
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
                                    }) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={thumbnail} alt="img"/>
            </div>
            <div className={styles.desc}>
                <h2>{title}</h2>
                <p>
                    {description}<br/>
                    <b>Price</b>: {price + ' $'}<br/>
                    <b>Brand</b>: {brand}<br/>
                    <b>Rating</b>: {rating}<br/>

                </p>
            </div>
        </div>
    );
};

// id,
// title,
// description,
// price,
// discountPercentage,
// rating,
// stock,
// brand,
// category,
// thumbnail,
// images


export default Product;