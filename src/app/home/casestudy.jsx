import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/casestudy.module.scss"
import { TitleBorderLine } from "@/src/app/app-constants"
import CaseStudySlider from "@/src/components/casestudyslider"
import IMG01 from "media/home/casestudy/img1.png"
import IMG02 from "media/home/casestudy/img2.png"
import IMG03 from "media/home/casestudy/img3.png"



const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        txt: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,",
        img: [IMG01, IMG02, IMG03],
        stats: [
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            },
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            }
        ]

    },
    {
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        txt: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,",
        img: [IMG01, IMG02, IMG03],
        stats: [
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            },
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            }
        ]

    }, {
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        txt: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,",
        img: [IMG01, IMG02, IMG03],
        stats: [
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            },
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            }
        ]

    },
    {
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        txt: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,",
        img: [IMG03, IMG01, IMG02],
        stats: [
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            },
            {
                tit: "Organic Traffic",
                points: "104",
            },
            {
                tit: "Organic Clicks",
                points: "252",
            }
        ]

    }
]

const CaseStudy = () => {
    return (
        <section className={`ptb-100 ${styles.caseStudy}`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12} className="m-auto">
                        <h2 className="text-center">Proven Success in <span className="lastHeading">Driving Results<TitleBorderLine /></span></h2>
                        <CaseStudySlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudy