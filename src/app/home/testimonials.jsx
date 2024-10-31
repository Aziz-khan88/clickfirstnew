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
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025080172/rendition/480p/file.mp4?loc=external&log_user=0&signature=a24fd9ea730a3494e4eb538a990d787a43ae55c2b9aaf69d839d446b62551d82",
        videoId: "1024676217",
        rating: "4.9",
        platform: (<YelpFav />)
    }
    , {
        name: "Levi Anderson, Owner",
        position: "Park Place Medical Spa",
        txt: "We hired Click First SMM to handle our social media marketing and the outcomes have been outstanding. Our campaign manager Omar Perez made sure that our plan precisely targeted our intended audience.",
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025080134/rendition/540p/file.mp4?loc=external&log_user=0&signature=96dc8621e834f7379e733e75568b155a5ae7ebff6cc74be0240268e89107220a",
        videoId: "1025080134",
        rating: "5.0",
        platform: (<TrustPilotFav />)
    },
    {
        name: "Heyman, Director",
        position: "Brain Wide Global Immigration",
        txt: 'The website design they created for us is very modern and it exceeded our expectations. Tim and his team have provided superb support to us throughout the project.',
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025080113/rendition/480p/file.mp4?loc=external&log_user=0&signature=bbe7aef20c27c1f05928524750fdea5132b19032b0c737ec9a77729e03b0f900",
        videoId: "1025080113",
        rating: "4.9",
        platform: (<ClutchFav />)

    }
    , {
        name: "Emily, Marketing Director",
        position: "Cinnaholic",
        txt: "Click First SMM has been just such a game changer. Omar, who worked closely with us throughout the entire project really just ensured that our social media and SEO strategies were perfectly aligned with our goals.",
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025080075/rendition/540p/file.mp4?loc=external&log_user=0&signature=8f13b437a229a60e8260af0bed40f89b0f20ab5820dcef8ea071085116cde1de",
        videoId: "1025080075",
        rating: "5.0",
        platform: (<GoogleFav />)
    }
    , {
        name: "Jean Gilford, CEO",
        position: "Institute Of Hazardous Materials Management",
        txt: "Within 45 minutes, Ronnie sorted out the problem with our Facebook page. He didn’t try to sell me other stuff but only focused on my problem and solved it. I will be working with Ronnie on other projects in the future.",
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025080037/rendition/480p/file.mp4?loc=external&log_user=0&signature=913ff9b42a7eb7049bb3a195b49b76d284d67369f948e454ee0fd39975dbf245",
        videoId: "1025080037",
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
                        <TestimonilSlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials