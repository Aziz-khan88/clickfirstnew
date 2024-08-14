"use client"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/testimonials.module.scss"
import TestimonilSlider from '@/src/components/testimonilslider'
import IMG01 from "media/home/test/test01.webp"
import IMG02 from "media/home/test/test02.webp"
import IMG03 from "media/home/test/test03.webp"

import { TitleBorderLine } from '../app-constants'


const OPTIONS = { align: 'center', loop: true, duration: 30 }
const SLIDES = [
    {
        name: "Heyman",
        position: "Founder, Creator Of Glorify",
        txt: 'The website design they created for us is very modern and it exceeded our expectations.Tim and his team have provided superb support to us throughout the project.',
        videoUrl: "/home/test/video1.mp4",
        img: IMG01.src,
        rating: "4.9"

    },
    {
        name: "Ralph",
        position: "Founder, Creator Of Glorify",
        txt: 'They really brought us some good sales with their Facebook and Instagram ad campaigns. The customer support from Tim kept us updated on the progress of the social media campaigns.',
        videoUrl: "/home/test/video2.mp4",
        img: IMG02.src,
        rating: "4.9"

    }
    , {
        name: "Jean Gilford",
        position: "Founder, Creator Of Glorify",
        txt: "Within 45 minutes, Ronnie sorted out the problem with our Facebook page. He didn’t try to sell me other stuff but only focused on my problem and solved it. I will be working with Ronnie on other projects in the future.",
        videoUrl: "/home/test/video3.mp4",
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
                        <h2>Hear From <span className='lastHeading'>Our Clients<TitleBorderLine /> </span> </h2>
                        {/* <p>And clients love to work with us</p> */}
                        <TestimonilSlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials