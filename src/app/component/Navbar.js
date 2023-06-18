'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import styles from '@/style/navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false);


    let route = useRouter();

    //header change function 
    const onChangeHeader = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }



    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
        <div>
            <header className={changeHeader ? styles.navbar_bg_white : styles.navbar_bg_transparent}>
                <nav className={styles.container}>
                    <div className={styles.navbar__container}>
                        <div className={styles.navbar__logo}>
                            <Image src='/chill-chillox-yl-logo.png' width={150} height={60} alt="Chill chillox logo" onClick={() => route.push('/')} />
                        </div>
                        <div className="navbar__menu">
                            <ul className={styles.navbar__lists}>
                                <Link className={styles.navbar__list} href="/">Home</Link>
                                <Link className={styles.navbar__list} href="/about">About</Link>
                                <Link className={styles.navbar__list} href="/menu">Menu</Link>
                                <Link className={styles.navbar__list} href="/contact">Contact Us</Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;