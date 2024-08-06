import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from "../../../styles/layout/navigation.module.scss"
import { NavIcon, ServicesIcon1, ServicesIcon2, ServicesIcon3, ServicesIcon4, ServicesIcon5, ServicesIcon6, SubMenuIcon } from '../app-constants'


const Navigation = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth <= 800;
                setIsMobileView(isMobile);
                if (!isMobile && isActive) {
                    // Close menu if it's active and screen width is greater than 800px
                    handleClosed();
                }
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const handleClosed = () => {
        setIsActive(false);
        document.body.classList.remove('active');
    };


    return (
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'}`}>
                <NavIcon />
            </div>
            <div className={`${styles.mainMenu} ${isActive ? `${styles.active}` : ''}`}>
                <ul>
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li >
                        <Link href="#" >Services <SubMenuIcon /></Link>
                        <div className={styles.subMenu} >
                            <div className={styles.MenuListing}>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon1 />Social Media Management</Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon2 />Search Engine Optimization</Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon3 />Influencer Marketing</Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon4 />Google Ads</Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon5 />Email Marketing</Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon6 />YouTube Optimization</Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#"><ServicesIcon6 />YouTube Monetization</Link>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li>
                        <Link href="#">Influencer Marketing</Link>
                    </li>
                    <li>
                        <Link href="#">YouTube monetization</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#">Call Now: 346-299-2202</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation