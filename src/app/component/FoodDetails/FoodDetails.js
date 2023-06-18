'use client'
import useFetch from '@/app/hooks/useFetch';
import React, { useState } from 'react';
import commonStyle from '@/style/common.module.css';
import styles from "@/style/foodDetails.module.css";
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { BsCart2 } from 'react-icons/bs';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { useOrder } from '../../../../context/OrderProvider';

const FoodDetails = ({ id }) => {

    const [quantity, setQuantity] = useState(1)
    const [foods] = useFetch();

    const router = useRouter();

    const { handleOrder } = useOrder();


    const detailFood = foods.filter((item) => id == item.id);


    return (
        <section className={commonStyle.container}>
            <div className={styles.back_button}>
                <Link href={'/'}><AiOutlineArrowLeft /> <span>Back</span></Link>
            </div>
            <div className={styles.food_area}>
                {
                    detailFood.map((food) => (<div key={food.id} className={commonStyle.two_columns_grid}>
                        {/* left side  */}
                        <div className={styles.food_details_text}>
                            <h1>{food.title}</h1>
                            <p>{food.description}</p>

                            {/* price and quantity  */}
                            <div className={styles.price_quantity}>
                                <h1>${(food.price * quantity).toFixed(2)}</h1>
                                {/* set quantity  */}
                                <div className={styles.quantity_item}>
                                    <AiOutlineMinus onClick={() => {
                                        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                                    }}
                                        className={styles.quantity_minus}
                                    />
                                    <span className={styles.quantity}>{quantity}</span>

                                    <AiOutlinePlus onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                        className={styles.quantity_minus}
                                    />
                                </div>

                            </div>

                            {/* add button  */}

                            <div className={styles.button_area}>
                                <button onClick={() => {
                                    food['quantity'] = quantity;
                                    food.price = food.price * quantity;
                                    handleOrder(food);
                                    console.log(food);
                                    router.push('/order')
                                }}>
                                    <BsCart2 className={styles.cart_icon} />
                                    <span>Add to Cart</span>
                                </button>
                            </div>


                        </div>

                        {/* right side  */}
                        <div className={styles.food_details_image}>
                            <Image src={food?.image} alt='This is food Image' width={550} height={550} />
                        </div>

                    </div>))
                }
            </div>

        </section>
    );
};

export default FoodDetails;