'use client'

import { React, useState } from 'react';
import styles from '@/style/food.module.css';
import commonStyle from '@/style/common.module.css';
import useFetch from '@/app/hooks/useFetch';
import FoodItem from './FoodItem';

const Foods = () => {

    const [menuTab, setMenuTab] = useState('Breakfast');

    const [foods] = useFetch();

    console.log(foods,menuTab)

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }


    // filter by menuTab 

    const foodFilter = foods.filter((item)=> menuTab === item.type);
    console.log(foodFilter);


    return (
        <section className={commonStyle.container}>
            {/* food menu tab  */}
            <div className={styles.menu_tab}>
                <p className={menuTab === 'Breakfast' ? styles.active_menu_button : styles.menu_button} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? styles.active_menu_button : styles.menu_button} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={menuTab === 'Dinner' ? styles.active_menu_button : styles.menu_button} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
            </div>

            {/* food tab  */}

            <div className={commonStyle.three_columns_grid}>
                {
                    foodFilter.map((item) => <FoodItem key={item.id} item = {item} />)
                }
            </div>


        </section>
    );
};

export default Foods;