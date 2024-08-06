import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/components/cta.module.scss"


const CtaComp = () => {
    return (
        <section className={`ptb-100 ${styles.ctaSec}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xl={10} lg={10} md={12} className="m-auto text-center">
                        <h2>Are you ready to transform your business?</h2>
                        <p>We are a bunch of tech-savvy enthusiasts who are passionate about digital. Our team lives & breathes creativity, and shares a common goal of shaping creative ideas into revenue, generating digital solutions for you.</p>
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