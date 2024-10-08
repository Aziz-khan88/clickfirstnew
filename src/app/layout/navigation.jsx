import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from "../../../styles/layout/navigation.module.scss"
import { NavIcon, Menu01, Menu02, Menu03, Menu04, Menu05, Menu06, Menu07, Menu08, Menu09, SubMenuIcon } from '../app-constants'


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
                        <Link href="/" aria-label="Home Page">Home</Link>
                    </li>
                    <li >
                        <Link href="#" aria-label="Services Page">Services <SubMenuIcon /></Link>
                        <div className={styles.subMenu} >
                            <div className={styles.MenuListing}>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Social Media Management Page">
                                        <div className={styles.icons}>
                                            <Menu01 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Social Media Marketing
                                                <span>Our social media marketing solutions help brands create an ever-lasting impression on their target audience.</span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="YouTube Monetization Page">
                                        <div className={styles.icons}>
                                            <Menu02 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>YouTube Monetization
                                                <span>Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Social Media Management Page">
                                        <div className={styles.icons}>
                                            <Menu03 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Social Media Management
                                                <span>Efficiently manage your brand’s online presence with strategies that build engagement and loyalty.</span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Search Engine Optimization Page">
                                        <div className={styles.icons}>
                                            <Menu04 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Search Engine Optimization
                                                <span>Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Social Media Advertising Page">
                                        <div className={styles.icons}>
                                            <Menu05 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Social Media Advertising
                                                <span>Drive targeted traffic and maximize ROI with precision-focused ad campaigns that capture attention.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Google Ads (PPC) Page">
                                        <div className={styles.icons}>
                                            <Menu06 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Google Ads (PPC)
                                                <span>Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Influencer Marketing Page">
                                        <div className={styles.icons}>
                                            <Menu07 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Influencer Marketing
                                                <span>Harness the power of influencers to amplify your brand’s reach and connect with your target audience.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="Email Marketing Page">
                                        <div className={styles.icons}>
                                            <Menu08 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>Email Marketing
                                                <span>Engage your audience with personalized email campaigns designed to nurture leads and drive sales.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.MenuList} onClick={isMobileView ? handleClosed : undefined}>
                                    <Link href="#" aria-label="YouTube Optimization Page">
                                        <div className={styles.icons}>
                                            <Menu09 />
                                        </div>
                                        <div className={styles.content}>
                                            <p>YouTube Optimization
                                                <span>Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="#" aria-label="Influencer Marketing Page">Influencer Marketing</Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="YouTube monetization Page">YouTube monetization</Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="About Page">About</Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="Contact Page">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="Call Now Page">Call Now: 346-299-2202</Link>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default Navigation