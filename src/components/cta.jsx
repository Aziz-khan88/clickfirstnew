import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/components/cta.module.scss"


const CtaComp = () => {
    return (
        <section className={`ptb-100 ${styles.ctaSec}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xl={10} lg={10} md={12} className="m-auto text-center">
                        <h2>Are You Ready To <span>Transform</span> Your <span>Business?</span></h2>
                        <p>At Click First SMM , we are a team of dedicated professionals who are deeply passionate about the digital landscape. Our expertise in creativity and technology allows us to turn innovative ideas into effective, revenue-generating solutions for your business. We focus on unlocking your brand’s full potential, driving measurable growth, and enhancing your digital presence.<br />Start your journey to success with us!</p>
                        <div className={styles.btnChat}>
                            Chat Now
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default CtaComp