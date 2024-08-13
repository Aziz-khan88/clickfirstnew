"use client"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/testimonials.module.scss"
import TestimonilSlider from '@/src/components/testimonilslider'
import IMG01 from "media/home/test/test01.webp"
import IMG02 from "media/home/test/test02.webp"
import IMG03 from "media/home/test/test03.webp"

import { TitleBorderLine } from '../app-constants'


const OPTIONS = { align: 'center', loop: false, duration: 30 }
const SLIDES = [
    {
        name: "Heyman",
        position: "Founder, Creator Of Glorify",
        txt: 'Our Result-Oriented SEO Services Come At The Most Sensible Rates Ever. We Propose Multiple Pricing SEO Packages To Best Suit Your Varying Budgets And Business Goals.',
        videoUrl: "home/test/video1.mp4",
        img: IMG01.src,
        rating: "4.9"

    },
    {
        name: "Ralph",
        position: "Founder, Creator Of Glorify",
        txt: 'Our Result-Oriented SEO Services Come At The Most Sensible Rates Ever. We Propose Multiple Pricing SEO Packages To Best Suit Your Varying Budgets And Business Goals.',
        videoUrl: "home/test/video3.mp4",
        img: IMG02.src,
        rating: "4.9"

    }
    , {
        name: "Jean Gilford",
        position: "Founder, Creator Of Glorify",
        txt: 'Our Result-Oriented SEO Services Come At The Most Sensible Rates Ever. We Propose Multiple Pricing SEO Packages To Best Suit Your Varying Budgets And Business Goals.',
        videoUrl: "home/test/video2.mp4",
        img: IMG03.src,
        rating: "4.9"
    }
]
const Testimonials = () => {
    return (
        <section className={`ptb-100 ${styles.testimonialSec}`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} className="my-auto">
                        <h2>Hear From <span className='lastHeading'>our clients<TitleBorderLine /> </span> </h2>
                        {/* <p>And clients love to work with us</p> */}
                        <TestimonilSlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials