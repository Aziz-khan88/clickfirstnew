import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/campaigns.module.scss"
import Image from "next/image"
import GuideImg from "media/home/guideImg.webp"
import Link from "next/link"
import FadeInSection from "@/src/components/fadesection"


const Guide = () => {
    return (
        <section className={`ptb-100 ${styles.campaignsSec}`}>
            <Container className={`h-100 ${styles.mainContainer}`}>
                <Row className="h-100">
                    <Col xl={6} lg={6} className="my-auto">
                        <h2><span className={styles.first}>Monetization Made Simple</span>
                            <span className={styles.last}>Let Us Guide You</span>
                        </h2>
                        <p>Struggling to monetize your YouTube channel and navigate its complex policies? Many YouTubers face stagnant growth and limited revenue due to a lack of expertise. Without the right guidance, you might miss out on significant earnings and feel demotivated despite your hard work. The intricacies of YouTube’s algorithms and ad policies can be overwhelming, leaving you frustrated and underperforming.</p>
                        <p>Click First SMM’s YouTube Monetization services are here to transform your channel’s potential. Our expert team will help you increase your subscriber count and optimize your video content to maximize ad revenue. With access to advanced analytics and tailored insights, you’ll make informed decisions that drive tangible results. Say goodbye to stagnant growth and unlock your channel’s true earning potential. Let us help you turn your YouTube efforts into substantial revenue and watch your earnings soar.</p>
                        <div className="btnTow">
                            <Link href="#" className="buttonStyle" aria-label="Get a Free Quote">Start Earning Today</Link>
                            <Link href="#" className="buttonStyle borderStyle" aria-label="Call Now">Call Now: 346-299-2202</Link>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} className="my-auto">
                        <FadeInSection>
                            <Image src={GuideImg} alt="CampaignsImg" />
                        </FadeInSection>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Guide