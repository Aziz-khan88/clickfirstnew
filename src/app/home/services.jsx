import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/services.module.scss"
import { ArrowIcon, ServicesIcon1, ServicesIcon2, ServicesIcon3, ServicesIcon4, ServicesIcon5, ServicesIcon6, ServicesIcon7, ServicesIcon8, ServicesIcon9, TitleBorderLine } from "@/src/app/app-constants"
import Link from "next/link"



const Services = () => {

    const data = [
        {
            title: "Social Media Marketing",
            txt: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
            icon: <ServicesIcon1 />
        },
        {
            title: "Social Media Management",
            txt: "Find people likely to purchase your product or service.",
            icon: <ServicesIcon2 />
        }
        ,
        {
            title: "Social Media Advertising",
            txt: "Collect leads for your business via instant forms, messages, calls, and sign-ups.",
            icon: <ServicesIcon3 />
        },
        {
            title: "Influencer Marketing",
            txt: "Harness the power of influencers to amplify your brand's reach and connect with your target audience.",
            icon: <ServicesIcon4 />
        },
        {
            title: "YouTube Optimization",
            txt: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
            icon: <ServicesIcon5 />
        },
        {
            title: "YouTube Monetization",
            txt: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
            icon: <ServicesIcon6 />
        },
        {
            title: "Search Engine Optimization",
            txt: "Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.",
            icon: <ServicesIcon7 />
        },
        {
            title: "Google Ads (PPC)",
            txt: "To help businesses reach potential consumers, we use Google Ads based on the demographics of the intended users.",
            icon: <ServicesIcon8 />
        }
        ,
        {
            title: "Email Marketing",
            txt: "Engage your audience with personalized email campaigns designed to nurture leads and drive sales.",
            icon: <ServicesIcon9 />
        }
    ]
    return (
        <section className={`ptb-100 ${styles.servicesSec}`}>
            <Container>
                <Row>
                    <Col xl={7} lg={7} md={7} className="m-auto text-center">
                        <h2>What <span>Marketing</span> Opportunities
                            We Bring To Your <span className="lastHeading">Easy Disposal?<TitleBorderLine /></span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12} className="m-auto">
                        <div className={styles.serviceContainer}>
                            {data.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.itemIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.itemTxt}>
                                        <h3>{item.title}</h3>
                                        <p>{item.txt}</p>
                                        <Link href="#" aria-label="See More Details">See More Details <ArrowIcon /></Link>
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

export default Services