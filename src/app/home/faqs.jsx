"use client"
import Link from 'next/link'
import { Row, Container, Col } from 'react-bootstrap'
import { useState } from 'react'
import styles from "@/styles/home/faqs.module.scss"
import { SubMenuIcon, TitleBorderLine } from '@/src/app/app-constants'

const FAQs = [
    {
        title: "Why Choose Click First SMM?",
        txt: "Click First SMM is the leading Social & Digital Media Marketing Agency in Houston, Texas, renowned for delivering transformative results. With a powerhouse team of 500+ in-house professionals, we ensure that every project is handled with expertise, precision, and the highest level of dedication. Our commitment to excellence has made us a trusted partner for businesses seeking unparalleled growth and success in the digital landscape."
    },
    {
        title: "Do We Outsource Our Projects?",
        txt: "No, we do not outsource our projects. All work is completed by our highly skilled in-house team of 500+ professionals, ensuring consistent quality, security, and the ability to meet our clients' specific needs with full control over every aspect of the project."
    },
    {
        title: "Do We Offer Marketing Audit & Consultation Service?",
        txt: "Yes, we offer a free marketing audit and consultation service. Our expert team provides a comprehensive analysis of your current marketing efforts, identifying areas of improvement and growth opportunities. This service is designed to give you a clear roadmap to success, tailored specifically to your business needs."
    },
    {
        title: "What Industries Do We Work With?",
        txt: "We work with a diverse range of industries—over 50 in total—providing branding, marketing, and business growth strategies tailored to each sector. Our experience spans from small startups to large enterprises, ensuring that no matter the industry, we can drive impactful results."
    },
    {
        title: "What Services Do We Offer?",
        txt: "We offer a full suite of services, including Social Media Marketing, Digital Marketing, Branding, SEO, Paid Advertising, Content Creation, Influencer Marketing, Video Production, and more. Our comprehensive offerings are designed to cover every aspect of your digital presence, helping you achieve sustained growth and a strong market position."
    }, {
        title: "How Long Will It Take to See Business Growth?",
        txt: "Business growth is a steady process that depends on several factors, including your industry, competition, and the budget tailored to your specific needs. While some results may be seen in the short term, true, sustainable growth typically takes time and consistent effort. We work with you to create a strategy that aligns with your goals and budget, ensuring gradual and reliable progress."
    },
    {
        title: "How Much Do We Charge for a Branding Package?",
        txt: "The cost of our branding packages varies depending on the scope and complexity of the project. We offer customized packages tailored to your business’s unique needs, ensuring you receive the best value for your investment. Please contact us for a detailed quote based on your specific requirements. Click here to see our complete packages."
    },
    {
        title: "Do We Offer Search Engine Optimization Services?",
        txt: "Yes, we offer expert SEO services designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. Our SEO strategies are tailored to your business goals, ensuring that you attract the right audience and achieve long-term success in the digital space."
    }
]

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState();

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className={`ptb-100 ${styles.faqSec}`}>
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <div className={styles.faqTitle}>
                            <h2>Answers To Frequently <span className="lastHeading">Asked Questions<TitleBorderLine /></span></h2>
                            {/* <p>In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy.</p> */}
                            <Link href="#" className="commonClass" aria-label="Let’s Discuss">Let’s Discuss</Link>
                        </div>
                    </Col>
                    <Col lg={8} md={6}>
                        <div className={styles.faqTabs}>
                            {FAQs.map((faq, index) => (
                                <div className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`} key={index}>
                                    <div
                                        className={styles.tabTitle}
                                        onClick={() => handleToggle(index)}
                                    >
                                        {faq.title} <SubMenuIcon />
                                    </div>
                                    {activeIndex === index && (
                                        <div className={styles.tabContent}>
                                            {faq.txt}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Faqs
