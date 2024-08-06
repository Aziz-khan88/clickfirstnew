import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/marketingopportunities.module.scss"
import Link from "next/link"
import IMG01 from "media/home/marketingopportunities/img_01.webp"
import IMG02 from "media/home/marketingopportunities/img_02.webp"
import IMG03 from "media/home/marketingopportunities/img_03.webp"
import IMG04 from "media/home/marketingopportunities/img_04.webp"
import IMG05 from "media/home/marketingopportunities/img_05.webp"
import IMG06 from "media/home/marketingopportunities/img_06.webp"
import IMG07 from "media/home/marketingopportunities/img_07.webp"
import IMG08 from "media/home/marketingopportunities/img_08.webp"
import IMG09 from "media/home/marketingopportunities/img_09.webp"

const data = [
    {
        title: "Social Media Marketing",
        txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        img: IMG01.src
    },
    {
        title: "Social Media Management",
        txt: "Find people likely to purchase your product or service.",
        img: IMG02.src
    }
    ,
    {
        title: "Social Media Advertising",
        txt: "Collect leads for your business via instant forms, messages, calls, and sign-ups.",
        img: IMG03.src
    },
    {
        title: "Influencer Marketing",
        txt: "Harness the power of influencers to amplify your brand's reach and connect with your target audience.",
        img: IMG04.src
    },
    {
        title: "YouTube Optimization",
        txt: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
        img: IMG05.src
    },
    {
        title: "YouTube Monetization",
        txt: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
        img: IMG06.src
    },
    {
        title: "Search Engine Optimization",
        txt: "Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.",
        img: IMG07.src
    },
    {
        title: "Google Advertisements (PPC)",
        txt: "To help businesses reach potential consumers, we use Google Ads based on the demographics of the intended users.",
        img: IMG08.src
    }
    ,
    {
        title: "Email Marketing",
        txt: "Engage your audience with personalized email campaigns designed to nurture leads and drive sales.",
        img: IMG09.src
    }
]


const MarketingOpportunities = () => {
    return (
        <section className={`ptb-100 ${styles.marketingOpportunities}`}>
            <Container>
                <Row>
                    <Col xl={7} lg={7} md={7} className="m-auto text-center">
                        <h2>What <span>Marketing</span> Opportunities
                            We Bring To Your <span>Easy Disposal?</span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className={styles.marketingOpportunitiesBox}>
                            {data.map((item, index) => (
                                <div className={styles.boxItem} key={index} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={styles.boxMain}>
                                        <h3>{item.title}</h3>
                                        <div className={styles.arrowLink}>

                                        </div>
                                        <div className={styles.boxContent}>
                                            <p>{item.txt}</p>
                                            <div>
                                                bttton
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MarketingOpportunities