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
                                <Link href="/" aria-label="Main Page" >
                                    <ClickFirstLogo />
                                </Link>
                            </div>
                            <ul className={styles.footerIcons}>
                                <li>
                                    <a href="https://www.facebook.com/clickfirstsmm" target="_blank" aria-label="Facebook Page">
                                        <FooterFacebookLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/clickfirstsmm" target="_blank" aria-label="Twitter Page">
                                        <FooterTwitterLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/clickfirst-smm" target="_blank" aria-label="Linkedin Page">
                                        <FooterLinkedinLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/clickfirstsmm" target="_blank" className={styles.instagram} aria-label="Instagram Page">
                                        <FooterInstagramLogo />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@clickfirstsmm" target="_blank" aria-label="Youtube Page">
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
                                        <li><Link href="#" aria-label="Home Page">Home</Link></li>
                                        <li><Link href="#" aria-label="About Page">About</Link></li>
                                        <li><Link href="#" aria-label="Contact Page">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className={styles.usefullLinks}>
                                    <h6>SERVICES</h6>
                                    <ul>
                                        <li><Link href="#" aria-label="Social Media Marketing Page">Social Media Marketing</Link></li>
                                        <li><Link href="#" aria-label="Social Media Management Page">Social Media Management</Link></li>
                                        <li><Link href="#" aria-label="Social Media Advertising Page">Social Media Advertising</Link></li>
                                        <li><Link href="#" aria-label="Influencer Marketing Page">Influencer Marketing</Link></li>
                                        <li><Link href="#" aria-label="YouTube Optimization Page" >YouTube Optimization</Link></li>
                                        <li><Link href="#" aria-label="YouTube Monetization Page">YouTube Monetization</Link></li>
                                        <li><Link href="#" aria-label="Search Engine Optimization Page">Search Engine Optimization</Link></li>
                                        <li><Link href="#" aria-label="Google Ads (PPC) Page">Google Ads (PPC)</Link></li>
                                        <li><Link href="#" aria-label="Email Marketing Page">Email Marketing</Link></li>
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
                                        9402 Synott Rd Apt 114, Houston, TX 77083
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        4424 W Sam Houston Pkwy N Westway #301, Houston, TX 77041
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <Link href="mailto:support@clickfirstsmm.com" aria-label="Email Page">support@clickfirstsmm.com</Link>
                                    </div>

                                </li>
                                <li>
                                    <div>
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <Link href="tel:346-299-2202" aria-label="Contact Links">346-299-2202</Link>
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
                                    <Link href="#" aria-label="Terms and Conditions Page">Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#" aria-label="Privacy Policy Page">Privacy Policy</Link>
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