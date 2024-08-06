import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/campaigns.module.scss"
import Image from "next/image"
import GuideImg from "media/home/guideImg.webp"
import Link from "next/link"


const Guide = () => {
    return (
        <section className={`ptb-100 ${styles.campaignsSec}`}>
            <Container className={`h-100 ${styles.mainContainer}`}>
                <Row className="h-100">
                    <Col xl={6} lg={6} className="my-auto">
                        <h2><span className={styles.first}>Monetization Made Simple</span>
                            <span className={styles.last}>Let Us Guide You</span>
                        </h2>
                        <p>Struggling to monetize your YouTube channel and navigate its complex policies? Many YouTubers face stagnant growth and limited revenue due to a lack of expertise. Without the right guidance, you might miss out on significant earnings and feel demotivated despite your efforts.</p>
                        <p>Click First SMM&apos;s YouTube Monetization services can help. We&apos;ll increase your subscriber count and optimize your video content for higher ad revenue. Gain access to advanced analytics and insights, enabling informed decisions to boost your channels performance. Say goodbye to stagnant growth and elevate your monetization potential with Click First SMM, watching your revenue soar.</p>
                        <div className={styles.btnFlex}>
                            <Link href="#" className={styles.buttonBlack}>Get a Free Quote</Link>
                            <Link href="#" className={styles.buttonTrans}>Call Now: 346-299-2202</Link>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} className="my-auto">
                        <Image src={GuideImg} alt="CampaignsImg" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Guide