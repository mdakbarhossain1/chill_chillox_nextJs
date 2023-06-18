import React from 'react';
import styles from '@/style/banner.module.css';
import commonStyle from '@/style/common.module.css';
import Image from 'next/image';
const Banner = () => {
    return (
        <div>

            <div className={styles.banner_bg}>
                <div className={commonStyle.container}>
                    <div className={commonStyle.two_columns_grid}>
                        <div className={styles.banner_text_info}>
                            <p>EASY WAY TO ORDER YOUR FOOD</p>
                            <h1>
                                Order Tasty &<br />
                                Fresh Food <br />
                                <span className={styles.banner_text_anytimes}> anytime!</span>
                            </h1>
                            <p>Just confirm your order and enjoy our <br />delicious fastest delivery.</p>
                            <div className={styles.button_group}>
                                <button className={styles.button_Order}>Order Now</button>
                                <button className={styles.button_See_menu}>See Menu</button>
                            </div>
                        </div>
                        <div className={styles.banner_image}>
                            <Image src='/breakfast1.png' width={450} height={450} alt='bannerImage' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;

