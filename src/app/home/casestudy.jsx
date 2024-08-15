import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/casestudy.module.scss"
import { TitleBorderLine } from "@/src/app/app-constants"
import CaseStudySlider from "@/src/components/casestudyslider"
import ZignaLogo from "media/home/casestudy/ZignaLogo.webp"
import Zigna1 from "media/home/casestudy/Zigna1.webp"
import Zigna2 from "media/home/casestudy/Zigna2.webp"
import Zigna3 from "media/home/casestudy/Zigna3.webp"
import Randy1 from "media/home/casestudy/Randy1.webp"
import Randy2 from "media/home/casestudy/Randy2.webp"
import Randy3 from "media/home/casestudy/Randy3.webp"
import Baseball1 from "media/home/casestudy/Baseball1.webp"
import Baseball2 from "media/home/casestudy/Baseball2.webp"
import Baseball3 from "media/home/casestudy/Baseball3.webp"
import Alaska1 from "media/home/casestudy/Alaska1.webp"
import Alaska2 from "media/home/casestudy/Alaska2.webp"
import Alaska3 from "media/home/casestudy/Alaska3.webp"
import Duct1 from "media/home/casestudy/Duct1.webp"
import Duct2 from "media/home/casestudy/Duct2.webp"
import Duct3 from "media/home/casestudy/Duct3.webp"



const OPTIONS = { align: 'start', loop: true }
const SLIDES = [
    {
        title: "Transforming Zigna Genix's Online Presence: From Social Media Ads to Digital Strategy",
        txt: "Zigna Genix initially sought Click First SMM's expertise to enhance its social media presence. After 8 months of successful collaboration and seeing impressive results, they chose to expand their engagement to include SEO, Google My Business (GMB) services, and email marketing. Our integrated digital marketing strategy has driven substantial growth for their business in terms of ROI. This evolution in their digital strategy has not only increased their online visibility but also deepened customer engagement, setting the stage for continued success.",
        img: [Zigna1, Zigna2, Zigna3],
        duration: "06",
        web: (
            <>
                <span>Website : </span>zignagenix.com
            </>
        ),
        stats: [
            {
                tit: "Reach",
                points: "200K+",
            },
            {
                tit: "Traffic",
                points: "14K+",
            },
            {
                tit: "Conversations",
                points: "2,400+",
            },
            {
                tit: "Qualified Leads",
                points: "1,000+",
            }
        ]
    },
    {
        title: "Unlocking YouTube Revenue: How Randy Sage Films Achieved $12,500+ in Monetization",
        txt: "Randy Sage Films partnered with Click First SMM to enhance their YouTube SEO efforts, and over the course of 12 months, the results have been outstanding. Within just 6 months, their channel experienced significant growth, including over 2 million video views, 111,000+ watch hours, and 8,000 new subscribers. This surge in engagement has translated into more than $12,500 in earnings via monetization. Our strategic SEO approach has proven to be highly effective, driving impressive performance and financial success for Randy Sage Films.",
        img: [Randy1, Randy2, Randy3],
        duration: "12",
        web: (
            <>
                <span>Channel:</span> youtube.com/@randysagefilms
            </>
        ),
        stats: [
            {
                tit: "Video Views",
                points: "2M+",
            },
            {
                tit: "Watch Hours",
                points: "111K+",
            },
            {
                tit: "Subscribers",
                points: "8K",
            },
            {
                tit: "Earnings",
                points: "$12,500+",
            }
        ]

    },
    {
        title: "Driving Record-Breaking Sales: How Baseball Bargains Achieved $3.2 Million in Revenue",
        txt: "Baseball Bargains transformed their online presence with Click First SMM's comprehensive digital marketing strategy. Starting with Search Engine Optimization, their success prompted the addition of Social Media Marketing and Google Ads. This multi-faceted approach resulted in over $3.2 million in sales, 28,000 orders, and 500,000 store sessions. With an impressive 26% conversion rate, the results underscore the effectiveness of a well-rounded digital strategy in driving substantial revenue growth and maximizing online performance.",
        img: [Baseball1, Baseball2, Baseball3],
        duration: "12",
        web: (
            <>
                <span>Website : </span>baseballbargains.com
            </>
        ),
        stats: [
            {
                tit: "Sales",
                points: "$3.2M+",
            },
            {
                tit: "Orders",
                points: "28K",
            },
            {
                tit: "Traffic",
                points: "500K+",
            },
            {
                tit: "Conversion Rate",
                points: "27%",
            }
        ]
    },
    {
        title: "Scaling Success: How Alaska Flour Achieved Consistent Growth Over 24 Months",
        txt: "Over a 24-month partnership, Alaska Flour leveraged Click First SMM's expertise to significantly enhance their online presence. Initially focusing on organic marketing and branding services, the client soon expanded into paid campaigns. This strategic shift led to impressive outcomes: an average monthly revenue of over $25,000, 500+ orders per month, and more than 4,000 organic visitors. With a 23% organic engagement rate, the combined approach of organic and paid strategies has driven sustained growth and success for Alaska Flour.",
        img: [Alaska1, Alaska2, Alaska3],
        duration: "24",
        web: (
            <>
                <span>Website : </span>alaskaflour.com
            </>
        ),
        stats: [
            {
                tit: "Revenue",
                points: "25K+",
            },
            {
                tit: "Orders",
                points: "500+",
            },
            {
                tit: "Organic Traffic",
                points: "4K+",
            },
            {
                tit: "Engagement Rate",
                points: "23%",
            }
        ]

    },
    {
        title: "From SEO Success to Social Media Excellence: Duct Care’s Growth Journey",
        txt: "Duct Care’s initial focus on Search Engine Optimization laid the groundwork for a transformative digital strategy. Following the impressive results of our SEO efforts, we expanded their approach to include Social Media Marketing. This strategic enhancement yielded remarkable outcomes: a reach of over 39,000, 4,000 profile visits, and 200+ messages and conversions. The campaign also generated more than 70 qualified leads, demonstrating how integrating SEO with social media can significantly elevate business performance and lead generation.",
        img: [Duct1, Duct2, Duct3],
        duration: "03",
        web: (
            <>
                <span>Website : </span>ductcare.ca
            </>
        ),
        stats: [
            {
                tit: "Reach",
                points: "39K+",
            },
            {
                tit: "Profile Visits",
                points: "4K",
            },
            {
                tit: "Conversions",
                points: "200+",
            },
            {
                tit: "Qualified Leads",
                points: "70+",
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