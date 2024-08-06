"use client"
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/home/marketingpartner.module.scss"
import { ClutchLogo, MetaLogo, SEOLogo, TitleBorderLine } from '@/src/app/app-constants'

const MarketingPartner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logos = [<MetaLogo key="meta" />, <ClutchLogo key="clutch" />];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 2000); // Change logo every 2 seconds

        return () => clearInterval(interval);
    }, [logos.length]);
    return (
        <section className={`${styles.marketingPartner} ptb-100`}>
            <Container>
                <Row>
                    <Col xl={6} lg={6} className="text-center m-auto">
                        <h2>Our Marketing <span className="lastHeading">Partners<TitleBorderLine /></span></h2>
                        <p>In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xl={10} lg={12} className="text-center m-auto">
                        <div className={styles.marketingPartnerBox}>
                            <div className={styles.marketingBoxItem}>
                                <div className={styles.boxIcon}>
                                    {logos.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.logo} ${index === currentIndex ? styles.show : styles.hide}`}
                                        >
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                                <h5>Partnerships</h5>
                                <p>Working alongside great minds is our
                                    secret to customer success.</p>
                            </div>
                            <div className={styles.marketingBoxItem}>
                                <div className={styles.boxIcon}>
                                    {logos.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.logo} ${index === currentIndex ? styles.show : styles.hide}`}
                                        >
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                                <h5>Awards</h5>
                                <p>We build our strategy around the data.
                                    The numbers light the way.</p>
                            </div>
                            <div className={styles.marketingBoxItem}>
                                <div className={styles.boxIcon}>
                                    {logos.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.logo} ${index === currentIndex ? styles.show : styles.hide}`}
                                        >
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                                <h5>Recognition</h5>
                                <p>We love hearing from our clients and our
                                    peers. See what they have to say about us.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default MarketingPartner