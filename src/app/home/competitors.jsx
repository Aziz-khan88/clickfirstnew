"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/competitors.module.scss"
import Link from "next/link"
import { useEffect, useRef } from 'react';


const Competitors = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        observer.observe(videoElement);

        return () => {
            observer.unobserve(videoElement);
        };
    }, []);

    return (
        <section className={`ptb-100 ${styles.competitorsSec}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xl={6} lg={6} className="my-auto">
                        <h2><span className={styles.first}>Surpass Your Competitors</span>
                            <span className={styles.last}>with Dynamic Creatives</span>
                        </h2>
                        <p>Don’t let dull visuals hold your business back from reaching its full potential. At Click First SMM, we craft eye-catching graphics, videos, and other multimedia assets that pack a punch and leave a lasting impression on your target customers.</p>
                        <p>Our team of seasoned creative designers knows how to develop content that stops scrollers in their tracks. Whether you’re looking to showcase a new product, highlight your company culture, or simply stay top-of-mind with your followers, we have the skills and expertise to create assets that spark curiosity, drive engagement, and deliver measurable results for your brand.</p>
                        <p>But it’s not just about pretty pictures - our approach is rooted in data and analytics. We’ll work closely with you to understand your audience, identify the platforms and content formats that resonate best, and continuously optimize your campaigns for maximum impact. By partnering with Click First SMM, you’ll be able to elevate your brand’s presence, boost awareness, and ultimately drive tangible growth for your business.</p>
                        <p>So why settle for boring, ineffective creatives when you can up-level your social media game with the power of captivating visuals? Contact Click First SMM today and start crafting a content strategy that will take your brand to new heights. Get ready to say goodbye to creatives and hello to social media success!</p>
                        <Link href="#" className="commonClass" aria-label="Get a Free Quote">Transform Your Brand’s Story</Link>
                    </Col>
                    <Col xl={6} lg={6} className="my-auto">
                        <video width="100%" controls={false} autoPlay loop muted preload="none" ref={videoRef} style={{ maxWidth: '100%' }}>
                            <source src={"videos/CompetitorsVideo.mp4"} type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Competitors