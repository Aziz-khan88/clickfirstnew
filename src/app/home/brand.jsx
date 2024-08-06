"use client"
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/brand.module.scss";
import Link from "next/link";
import BrandCarousel from "@/src/components/brandcarosusel";
import { useState, useEffect, useRef } from "react";
import Youtube from 'media/home/brands/icons/youtube.webp'
import Facebook from 'media/home/brands/icons/facebook.webp'
import Instagram from 'media/home/brands/icons/instagram.webp'
import Tiktok from 'media/home/brands/icons/tiktok.webp'
import Image from "next/image";


const Brand = () => {
    const [activevideoUrl, setActiveVideoUrl] = useState("");
    const videoRef = useRef(null);

    const handleVideoSelect = (videoUrl) => {
        setActiveVideoUrl(videoUrl);
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            const handleLoadedData = () => {
                videoElement.play();
            };

            videoElement.pause();
            videoElement.src = activevideoUrl;
            videoElement.load();
            videoElement.addEventListener('loadeddata', handleLoadedData);

            return () => {
                videoElement.removeEventListener('loadeddata', handleLoadedData);
            };
        }
    }, [activevideoUrl]);




    return (
        <section className={`ptb-100 ${styles.BrandSec}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={7} xl={7} lg={7} className='my-auto'>
                        <h2><span className={styles.first}>Skyrocket Your Brand</span>
                            <span className={styles.last}>with Influencer Stardom</span>
                        </h2>
                        <p>Boost your brand&apos;s visibility with influencer marketing from Click First SMM. Our expert strategists excel in creating genuine, impactful partnerships with top niche influencers. By tapping into their loyal followers and leveraging their trust, we&apos;ll help you reach your target audience, build credibility, and drive a surge in website traffic and conversions.</p>
                        <p>Eliminate the guesswork with Click First SMM&apos;s data-driven influencer marketing approach. We&apos;ll connect you with the ideal influencers, design engaging campaigns, and deliver measurable results that elevate your business. Amplify your reach and enhance your brand with Click First SMM&apos;s influencer marketing expertise.</p>
                        <Link href="#" className={styles.buttonClass}>Get a Free Quote</Link>
                        <BrandCarousel onVideoSelect={handleVideoSelect} />
                    </Col>
                    <Col xxl={5} xl={5} lg={5} className='my-auto text-center'>
                        <div className={styles.influenceVideo}>
                            <Image src={Youtube} className={styles.Youtube} alt="Img_01" />
                            <Image src={Facebook} className={styles.Facebook} alt="Img_01" />
                            <Image src={Instagram} className={styles.Instagram} alt="Img_01" />
                            <Image src={Tiktok} className={styles.Tiktok} alt="Img_01" />

                            <video width="100%" controls autoPlay muted preload="none" ref={videoRef}>
                                <source src={activevideoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>


                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Brand;
