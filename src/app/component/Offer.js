import React from 'react';
import styles from '@/style/offer.module.css';
import commonStyle from '@/style/common.module.css';
import Image from 'next/image';

const Offer = () => {
    return (
        <div>
            <div className={commonStyle.container}>
                <div className={styles.offers_container}>
                    <div className={commonStyle.two_columns_grid}>
                        <div className={styles.offers_card_a}>
                            <div className={styles.offer_card_text}>
                                <h3>
                                    This Month Special
                                </h3>
                                <h1>
                                    The Japanese <br />Sishii Burger
                                </h1>
                                <button>ORDER NOW</button>
                            </div>
                            <div className={styles.offer_card_image}>
                                <Image src='/burger-A.png' alt='this a buger image' width={250} height={250} />
                            </div>
                        </div>
                        <div className={styles.offers_card_b}>
                            <div className={styles.offer_card_text}>
                                <h3>
                                    Festive Special
                                </h3>
                                <h1>
                                    Burger withs <br />Benefits
                                </h1>
                                <button>ORDER NOW</button>
                            </div>
                            <div className={styles.offer_card_image}>
                                <Image src='/burger-B.png' alt='this a buger image' width={250} height={250} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.offer_gap}>
                        <div className={commonStyle.three_columns_grid}>
                            <div className={styles.offers_card_c}>
                                <div className={styles.offer_card_text}>
                                    <h3>
                                        Offer
                                    </h3>
                                    <h1>
                                        Fat Boy <br />Pancake
                                    </h1>
                                    <button>ORDER NOW</button>
                                </div>
                                <div className={styles.offer_card_image}>
                                    <Image src='/pancake.png' alt='this a buger image' width={180} height={180} />
                                </div>
                            </div>
                            <div className={styles.offers_card_d}>
                                <div className={styles.offer_card_text}>
                                    <h3>
                                        $ <span>2</span>
                                    </h3>
                                    <h1>
                                        All Day <br />Every Day
                                    </h1>
                                    <button>ORDER NOW</button>
                                </div>
                                <div className={styles.offer_card_image}>
                                    <Image src='/burger-B.png' alt='this a buger image' width={180} height={180} />
                                </div>
                            </div>
                            <div className={styles.offers_card_e}>
                                <div className={styles.offer_card_text}>
                                    <h3>
                                        20% off
                                    </h3>
                                    <h1>
                                        Limited<br />Offer
                                    </h1>
                                    <button>ORDER NOW</button>
                                </div>
                                <div className={styles.offer_card_image}>
                                    <Image src='/edgar_castrejon.png' alt='this a buger image' width={180} height={180} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;