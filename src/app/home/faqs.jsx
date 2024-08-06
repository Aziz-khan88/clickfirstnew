"use client"
import Link from 'next/link'
import { Row, Container, Col } from 'react-bootstrap'
import { useState } from 'react'
import styles from "@/styles/home/faqs.module.scss"
import { SubMenuIcon } from '@/src/app/app-constants'

const FAQs = [
    {
        title: "Why choose Click First?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "How big is your team?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "What is typically included in a standard branding package?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    }, {
        title: "Do you offer marketing audit & consultation service?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "What clientele or industries do you work with?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "What services do you offer?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    }, {
        title: "How long will a web design project take?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "Do you offer copywriting services?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "How much do you charge for a branding package?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "Do you offer SEO services?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
    },
    {
        title: "Do you offer maintenance services?",
        txt: "In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy."
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
                    <Col lg={4}>
                        <h2>Answers To Frequently Asked Questions</h2>
                        <p>In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy.</p>
                        <Link href="#" className="commonClass">Let's Discuss</Link>
                    </Col>
                    <Col lg={8}>
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
