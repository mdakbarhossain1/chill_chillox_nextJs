import React from 'react';
import styles from '@/style/ordercard.module.css';
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';
import { useOrder } from '../../../../context/OrderProvider';

const OrderCard = ({ image, title, price, type, quantity, id }) => {

    const { removeOrder } = useOrder()


    return (
        <div className={styles.order_card_container}>
            <div className={styles.food_image}>
                <Image src={image} alt='food Image' width={120} height={120} />
            </div>
            <div className={styles.food_text_info}>
                <h4>{title}</h4>
                <h2>${price.toFixed(2)}</h2>
                <p>{type}</p>
            </div>
            <div className={styles.food_quantity}>
                <span>{quantity}</span>
            </div>

            {/* remove button  */}
            <div className={styles.remove_button}>
                <AiOutlineDelete className={styles.remove_icon} onClick={() => removeOrder(id)} />
            </div>

        </div>
    );
};

export default OrderCard;