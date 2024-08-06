import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/components/ctapackage.module.scss"
import Image from 'next/image'
import IMG from 'media/home/imgCta.webp'

const CtaPackage = () => {
    return (
        <section className={styles.ctaPackage}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={12} className="my-auto">
                        <div className={styles.ctaBox}>

                            <div className={styles.imgPackage}>
                                <Image src={IMG.src} alt='Image Cta' width={516} height={519} />
                            </div>

                            <div className={styles.ctaMain}>
                                <h2>Want a <span>Customized Package </span>
                                    Tailored Just for You?</h2>
                                <div className={styles.btnFlex}>
                                    <div className={styles.btnOne}>
                                        Booked an Appointment With Our Expert
                                    </div>
                                    <div className={styles.btnTwo}>
                                        Get a Free Consultation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default CtaPackage