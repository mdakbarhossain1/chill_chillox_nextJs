import React from 'react';
import { useOrder } from '../../../../context/OrderProvider';
import styles from '@/style/orderPrice.module.css';


const OrderPrice = () => {
    const { order } = useOrder();
    // console.log(order);

    let allPrice = 0;
    for (var i = 0; i < order.length; i++) {
        allPrice += order[i].price * order[i].quantity
        // console.log(order[i].price * order[i].quantity)
    }
    console.log(allPrice)

    const subTotal = parseFloat(allPrice.toFixed(2));
    const tax = parseFloat((allPrice % 5).toFixed(2));
    const deliveryFee = parseFloat((allPrice % 20).toFixed(2));
    const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2))

    return (
        <div className={styles.order_price}>
            <div className={styles.items_center}>
                <span className={styles.items_text}>Subtotal</span>
                <span className={styles.items_amount}>${subTotal}</span>
            </div>
            <div className={styles.items_center}>
                <span className={styles.items_text}>Tax</span>
                <span className={styles.items_amount}>${tax}</span>
            </div>
            <div className={styles.items_center}>
                <span className={styles.items_text}>Delivery Fee</span>
                <span className={styles.items_amount}>${deliveryFee}</span>
            </div>
            <div className={styles.items_center}>
                <span className={styles.items_text}>Total</span>
                <span className={styles.items_amount}>${total}</span>
            </div>
        </div>
    )
};

export default OrderPrice