"use client"
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/home/marketingpartner.module.scss"
import { TitleBorderLine } from '@/src/app/app-constants'
import Partner01 from "media/home/marketingpartner/Partner01.webp"
import Partner02 from "media/home/marketingpartner/Partner02.webp"
import Partner03 from "media/home/marketingpartner/Partner03.webp"
import Partner04 from "media/home/marketingpartner/Partner04.webp"
import Partner05 from "media/home/marketingpartner/Partner05.webp"
import Awards01 from "media/home/marketingpartner/Awards01.webp"
import Awards02 from "media/home/marketingpartner/Awards02.webp"
import Awards03 from "media/home/marketingpartner/Awards03.webp"
import Awards04 from "media/home/marketingpartner/Awards04.webp"
import Awards05 from "media/home/marketingpartner/Awards05.webp"
import Awards06 from "media/home/marketingpartner/Awards06.webp"
import Awards07 from "media/home/marketingpartner/Awards07.webp"
import Awards08 from "media/home/marketingpartner/Awards08.webp"
import Awards09 from "media/home/marketingpartner/Awards09.webp"
import Recognition01 from "media/home/marketingpartner/Recognition01.webp"
import Recognition02 from "media/home/marketingpartner/Recognition02.webp"
import Recognition03 from "media/home/marketingpartner/Recognition03.webp"
import Recognition04 from "media/home/marketingpartner/Recognition04.webp"
import Image from 'next/image'

const MarketingPartner = () => {
    const [partnerIndex, setPartnerIndex] = useState(0);
    const [awardsIndex, setAwardsIndex] = useState(0);
    const [recognitionIndex, setRecognitionIndex] = useState(0);

    const Partner = [Partner01, Partner02, Partner03, Partner04, Partner05];
    const Awards = [Awards01, Awards02, Awards03, Awards04, Awards05, Awards06, Awards07, Awards08, Awards09];
    const Recognition = [Recognition01, Recognition02, Recognition03, Recognition04];

    useEffect(() => {
        const partnerInterval = setInterval(() => {
            setPartnerIndex((prevIndex) => (prevIndex + 1) % Partner.length);
        }, 2000);

        const awardsInterval = setInterval(() => {
            setAwardsIndex((prevIndex) => (prevIndex + 1) % Awards.length);
        }, 2000);

        const recognitionInterval = setInterval(() => {
            setRecognitionIndex((prevIndex) => (prevIndex + 1) % Recognition.length);
        }, 2000);

        return () => {
            clearInterval(partnerInterval);
            clearInterval(awardsInterval);
            clearInterval(recognitionInterval);
        };
    }, [Partner.length, Awards.length, Recognition.length]);

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
                                    {Partner.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.logo} ${index === partnerIndex ? styles.show : styles.hide}`}
                                        >
                                            <Image src={logo.src} alt={`Awards0 ${index}`} height={70} width={183} />
                                        </div>
                                    ))}
                                </div>
                                <h5>Partnerships</h5>
                                <p>Working alongside great minds is our
                                    secret to customer success.</p>
                            </div>
                            <div className={styles.marketingBoxItem}>
                                <div className={styles.boxIcon}>
                                    {Awards.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.logo} ${styles.awardLogo} ${index === awardsIndex ? styles.show : styles.hide}`}
                                        >
                                            <Image src={logo.src} alt={`Awards0 ${index}`} height={116} width={116} />
                                        </div>
                                    ))}
                                </div>
                                <h5>Awards</h5>
                                <p>We build our strategy around the data.
                                    The numbers light the way.</p>
                            </div>
                            <div className={styles.marketingBoxItem}>
                                <div className={styles.boxIcon}>
                                    {Recognition.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.logo} ${index === recognitionIndex ? styles.show : styles.hide}`}
                                        >
                                            <Image src={logo.src} alt={`Recognition ${index}`} width={161} height={70} />
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
