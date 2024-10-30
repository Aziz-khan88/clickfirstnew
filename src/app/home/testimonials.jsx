"use client"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/testimonials.module.scss"
import TestimonilSlider from '@/src/components/testimonilslider'

import { ClutchFav, GoogleFav, TitleBorderLine, TrustPilotFav, YelpFav } from '../app-constants'


const OPTIONS = { align: 'center', loop: true, duration: 30 }
const SLIDES = [
    {
        name: "Ralph, Owner & CEO",
        position: "Mirage Luxury Travel",
        txt: 'They really brought us some good sales with their Facebook and Instagram ad campaigns. The customer support from Tim kept us updated on the progress of the social media campaigns.',
        videoUrl: "https://player.vimeo.com/video/1024676217",
        img: "https://vumbnail.com/1024676217.jpg",
        rating: "4.9",
        platform: (<YelpFav />)
    }
    , {
        name: "Levi Anderson, Owner",
        position: "Park Place Medical Spa",
        txt: "We hired Click First SMM to handle our social media marketing and the outcomes have been outstanding. Our campaign manager Omar Perez made sure that our plan precisely targeted our intended audience.",
        videoUrl: "https://player.vimeo.com/video/1024705198",
        img: "https://vumbnail.com/1024705198.jpg",
        rating: "5.0",
        platform: (<TrustPilotFav />)
    },
    {
        name: "Heyman, Director",
        position: "Brain Wide Global Immigration",
        txt: 'The website design they created for us is very modern and it exceeded our expectations. Tim and his team have provided superb support to us throughout the project.',
        videoUrl: "https://player.vimeo.com/video/1024676174",
        img: "https://vumbnail.com/1024676174.jpg",
        rating: "4.9",
        platform: (<ClutchFav />)

    }
    , {
        name: "Emily, Marketing Director",
        position: "Cinnaholic",
        txt: "Within 45 minutes, Ronnie sorted out the problem with our Facebook page. He didn’t try to sell me other stuff but only focused on my problem and solved it. I will be working with Ronnie on other projects in the future.",
        videoUrl: "https://player.vimeo.com/video/1024705340",
        img: "https://vumbnail.com/1024705340.jpg",
        rating: "5.0",
        platform: (<GoogleFav />)
    }
    , {
        name: "Jean Gilford, CEO",
        position: "Institute Of Hazardous Materials Management",
        txt: "Within 45 minutes, Ronnie sorted out the problem with our Facebook page. He didn’t try to sell me other stuff but only focused on my problem and solved it. I will be working with Ronnie on other projects in the future.",
        videoUrl: "https://player.vimeo.com/video/1024676259",
        img: "https://vumbnail.com/1024676259.jpg",
        rating: "5.0",
        platform: (<TrustPilotFav />)
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