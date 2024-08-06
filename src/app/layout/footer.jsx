import styles from "@/styles/layout/footer.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { ClickFirstLogo, EmailIcon, FooterFacebookLogo, FooterInstagramLogo, FooterLinkedinLogo, FooterTwitterLogo, FooterYoutubeLogo, LocationIcon, PhoneIcon } from "@/src/app/app-constants"

const Footer = () => {
    return (
        <>
            <section className={styles.footerSec}>
                <Container>
                    <Row>
                        <Col xl={3} lg={3} md={4}>
                            <div className={styles.footerLogo}>
                                <Link href="">
                                    <ClickFirstLogo />
                                </Link>
                            </div>
                            <ul className={styles.footerIcons}>
                                <li>
                                    <a href="https://www.facebook.com/clickfirstsmm" target="_blank">
                                        <FooterFacebookLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/clickfirstsmm" target="_blank">
                                        <FooterTwitterLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/clickfirst-smm" target="_blank">
                                        <FooterLinkedinLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/clickfirstsmm" target="_blank" className={styles.instagram}>
                                        <FooterInstagramLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@clickfirstsmm" target="_blank">
                                        <FooterYoutubeLogo />
                                    </a>
                                </li>

                            </ul>
                        </Col>
                        <Col xl={6} lg={5} md={8}>
                            <div className={styles.footerLinks}>
                                <div className={styles.usefullLinks}>
                                    <h6>LINKS</h6>
                                    <ul>
                                        <li><Link href="#">Home</Link></li>
                                        <li><Link href="#">Pricing</Link></li>
                                        <li><Link href="#">About</Link></li>
                                        <li><Link href="#">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className={styles.usefullLinks}>
                                    <h6>SERVICES</h6>
                                    <ul>
                                        <li><Link href="#">Social Media Marketing</Link></li>
                                        <li><Link href="#">Search Engine Optimization</Link></li>
                                        <li><Link href="#">Influencer Marketing</Link></li>
                                        <li><Link href="#">Google Ads</Link></li>
                                        <li><Link href="#">Email Marketing</Link></li>
                                        <li><Link href="#">YouTube Optimization</Link></li>
                                        <li><Link href="#">YouTube Monetization</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={12}>
                            <ul className={styles.locationSce}>
                                <li>
                                    <div>
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        Headquarters: 9402 Synott RD apt 114,
                                        Houston Texas 77083
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        Operations: 4424 W Sam Houston PKWY
                                        N Westway #301 Houston, TX 77041
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <Link href="mailto:support@clickfirstsmm.com">support@clickfirstsmm.com</Link>
                                    </div>

                                </li>
                                <li>
                                    <div>
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <Link href="tel:346-299-2202">346-299-2202</Link>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSec}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col xl={6} lg={6} md={6} className="my-auto">
                            <p>Copyright @ClickFirstSMM 2024</p>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="my-auto">
                            <ul className={styles.legalLinks}>
                                <li>
                                    <Link href="#">Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer