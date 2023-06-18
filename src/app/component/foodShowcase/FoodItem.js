import React from 'react';
import styles from '@/style/fooditem.module.css';
import Image from 'next/image';
import Link from 'next/link';

const FoodItem = (props) => {
    const { id, title, price, description, image, type } = props.item;


    return (
        <div className={styles.food_card}>
            <span>{type}</span>
            <Image src={image} alt='This is Food Images' width={200} height={200} />
            <div className={styles.food_card_text}>
                <h1>{title}</h1>
                <p>{description.slice(0,60)}...</p>
                <h2>${price}</h2>
                <Link href={`/food/${id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default FoodItem;