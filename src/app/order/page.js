'use client'

import React, { useState } from 'react';
import commonStyles from '@/style/common.module.css';
import styles from '@/style/order.module.css';
import { useDelivery } from '../../../context/DeliveryProvider';
import { useOrder } from '../../../context/OrderProvider';
import OrderCard from '../component/FoodDetails/OrderCard';
import OrderPrice from '../component/FoodDetails/OrderPrice';
import { useRouter } from 'next/navigation';




const Order = () => {

    const { setDisabled, setInput, input, disabled } = useDelivery();
    const router = useRouter()

    const { order, setOrder } = useOrder();

    const [change, setChange] = useState({
        name: '',
        number: '',
        street: '',
        message: '',
    })
    //handle Change 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setChange((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            name: change.name,
            number: change.number,
            street: change.street,
            message: change.message,
        })

        alert("Your Shipping Details Updated Successfully")
        setDisabled(false)
        console.log(input)

    }
    // const [food] = useFetch();


    return (
        <section className={commonStyles.container}>
            <div className={styles.orders_section}>
                <div className={commonStyles.two_columns_grid}>
                    {/* left side delivery details section */}
                    <div className={styles.delivery_details}>
                        <h1>Place Your Delivery Details</h1>
                        <form action="" onSubmit={handleSubmit} className={styles.delivery_details_form}>
                            <input
                                required={true}
                                type="text"
                                placeholder='Your Name'
                                name="name"
                                value={change.name}
                                onChange={handleChange} />
                            <input
                                required={true}
                                type="number"
                                placeholder='Your Number'
                                name="number"
                                value={change.number}
                                onChange={handleChange} />
                            <input
                                required={true}
                                type="text"
                                placeholder='Street No & House No'
                                name="street"
                                value={change.street}
                                onChange={handleChange} />
                            <textarea
                                name="message"
                                id="special_message"
                                cols="30"
                                rows="10"
                                placeholder='Your Special Message'
                                value={change.message}
                                onChange={handleChange} />
                            <input type="submit" value="Save & Continue" className={styles.submit_button} />
                        </form>
                    </div>
                    {/* Right side place order section  */}
                    <div className={styles.place_order}>
                        <div className={styles.order_details}>
                            {/* order details  */}
                            <div className={styles.order_info}>
                                <p className={styles.order_text}>Name : <span>{input.name ? `${input.name}` : '----------'}</span></p>
                                <p className={styles.order_text}>Number : <span>{input.number ? `${input.number}` : '----------'}</span></p>
                                <p className={styles.order_text}>Street : <span>{input.street ? `${input.street}` : '----------'}</span></p>
                                <p className={styles.order_text}>Message : <span>{input.message ? `${input.message}` : '----------'}</span></p>
                            </div>
                            {/* order  */}
                            <div className={styles.order_food}>
                                {
                                    order.map((item) => (
                                        <OrderCard key={item.id} {...item} />
                                    ))
                                }
                            </div>

                            {/* Order price  */}
                            <OrderPrice {...order} />

                            {/* place order button  */}
                            <div>
                                {disabled ? (
                                    <button disabled="disabled" className={styles.place_order_ds_button}>Place Order</button>
                                ) : (
                                    <button className={styles.place_order_button} onClick={() => {
                                        alert("Congratulations!!!", `You have order ${order.length} times successfully`, "success")
                                        router.push('/');
                                        setOrder([]);
                                    }}>Place Order</button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;