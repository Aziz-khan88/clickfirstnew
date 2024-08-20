"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/priceing.module.scss"
import PricingPlan from "@/src/components/pricingplan"
import { useState } from 'react';
import { TitleBorderLine } from "../app-constants";


const tabData = [
    { name: 'Annually' },
    { name: 'Biannually' },
    { name: 'Quarterly' }
]

const PricingData = [
    { starter: '350', pro: '650', elite: '950', valid: "Annually" },
    { starter: '400', pro: '700', elite: '1000', valid: "Biannually" },
    { starter: '600', pro: '900', elite: '1200', valid: "Quarterly" },
]


const Priceing = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className={`ptb-50 ${styles.priceingSec}`}>
            <Container>
                <Row>
                    <Col xl={9} lg={9} className="m-auto text-center">
                        <h2>Quality Over Discounts<br />
                            Elevate Your <span className="lastHeading">Social Media Presence Today!<TitleBorderLine /></span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12} className="m-auto">
                        <div className={styles.tabHeader}>
                            {tabData.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tabName} ${activeTab === index ? `${styles.active}` : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >{tab.name}
                                </div>
                            ))}
                        </div>
                        <div className={styles.tabBody}>
                            {tabData.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tabContent} ${activeTab === index ? `${styles.active}` : ''}`}
                                >
                                    <PricingPlan data={PricingData[index]} />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Priceing