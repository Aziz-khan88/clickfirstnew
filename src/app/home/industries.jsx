"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import IndustriesSlider from "@/src/components/industriesslider"
import IMG01 from "media/home/industries/Cleaning-Services.webp"
import IMG02 from "media/home/industries/Packaged-Consumer-Goods.webp"
import IMG03 from "media/home/industries/Makeup-Artists.webp"
import IMG04 from "media/home/industries/Real-Estate.webp"
import IMG05 from "media/home/industries/Finance.webp"
import IMG06 from "media/home/industries/Music.webp"
import IMG07 from "media/home/industries/Restaurant.webp"
import IMG08 from "media/home/industries/Furniture-Interior-Designing.webp"
import IMG09 from "media/home/industries/Fashion.webp"
import IMG10 from "media/home/industries/Health-Wellness.webp"
import IMG11 from "media/home/industries/Dry-Cleaning.webp"
import IMG12 from "media/home/industries/Cosmetics.webp"
import IMG13 from "media/home/industries/Security-Services.webp"
import IMG14 from "media/home/industries/Supplements.webp"
import IMG15 from "media/home/industries/Ecommerce.webp"
import IMG16 from "media/home/industries/Fitness-Modeling.webp"
import IMG17 from "media/home/industries/Spa-Salon.webp"
import IMG18 from "media/home/industries/Handyman.webp"
import IMG19 from "media/home/industries/Sports.webp"
import IMG20 from "media/home/industries/Automotive.webp"
import IMG21 from "media/home/industries/Jewelry-Accessories.webp"
import IMG22 from "media/home/industries/Content-Creators.webp"
import IMG23 from "media/home/industries/Event-Ticket-Sales.webp"
import IMG24 from "media/home/industries/B2B-Businesses.webp"
import IMG25 from "media/home/industries/Construction.webp"
import IMG26 from "media/home/industries/Learning-Education.webp"
import IMG27 from "media/home/industries/Insurance.webp"
import IMG28 from "media/home/industries/Engineering-Firms.webp"
import IMG29 from "media/home/industries/Animal-Pets.webp"
import IMG30 from "media/home/industries/Hotel-Resorts.webp"
import IMG31 from "media/home/industries/Non-Profits-Causes.webp"
import IMG32 from "media/home/industries/Transportation-Logistics.webp"
import IMG33 from "media/home/industries/Legal.webp"
import IMG34 from "media/home/industries/Travel-Tours.webp"
import Link from "next/link"
import { TitleBorderLine } from "@/src/app/app-constants"

const OPTIONS = { align: 'center', dragFree: true, loop: true }

const SLIDES = [
    {
        title: "Cleaning Service",
        txt: "Struggling to stand out in a crowded market? Let our social media magic make your spotless services a trending topic!",
        img: IMG01.src,
        links: "#"
    },
    {
        title: "Packaged Consumer Goods",
        txt: "Finding it hard to connect with your  audience? Boost your brand presence and engage customers with our  compelling social media strategies!",
        img: IMG02.src,
        links: "#"
    }, {
        title: "Makeup Artists",
        txt: "Want to transform your artistry into a viral sensation? Our social media expertise will help your talent shine online!",
        img: IMG03.src,
        links: "#"
    },
    {
        title: "Real Estate",
        txt: "Having trouble getting your listings noticed? Make every property a must-see with our targeted social media campaigns!",
        img: IMG04.src,
        links: "#"
    },
    {
        title: "Finance",
        txt: "Is your financial expertise getting lost in the noise? Simplify complex concepts and build trust with engaging social media content!",
        img: IMG05.src,
        links: "#"
    }, {
        title: "Music",
        txt: "Struggling to reach a wider audience? Amplify your sound and connect with millions through our dynamic social media strategies!",
        img: IMG06.src,
        links: "#"
    }, {
        title: "Restaurant",
        txt: "Need to fill more seats and make mouths water? Our irresistible social media content will turn your dishes into viral hits!",
        img: IMG07.src,
        links: "#"
    }, {
        title: "Furniture/Interior Designing",
        txt: "Finding it hard to showcase your designs? Create stunning visual feeds that attract clients with our social media flair!",
        img: IMG08.src,
        links: "#"
    }
    , {
        title: "Fashion",
        txt: "Is your brand struggling to stay ahead of the trends? Turn heads and set trends with our stylish social media campaigns!",
        img: IMG09.src,
        links: "#"
    }
    , {
        title: "Health and Wellness",
        txt: "Having trouble promoting healthy living? Build a loyal following and inspire wellness with our targeted social media solutions!",
        img: IMG10.src,
        links: "#"
    }, {
        title: "Dry Cleaning",
        txt: "Are your services not getting the attention they deserve? Transform your convenience into online buzz with our social media expertise!",
        img: IMG11.src,
        links: "#"
    }, {
        title: "Cosmetics",
        txt: "Want your beauty products to go viral? Our social media strategies will make your brand the talk of the town!",
        img: IMG12.src,
        links: "#"
    }
    , {
        title: "Security Services",
        txt: "Struggling to build trust in your services? Highlight safety and reliability with our powerful social media campaigns!",
        img: IMG13.src,
        links: "#"
    }, {
        title: "Supplements",
        txt: "Need to boost your brand and sales? Drive engagement and conversions with our effective social media strategies!",
        img: IMG14.src,
        links: "#"
    }, {
        title: "Ecommerce",
        txt: "Finding it hard to drive traffic and sales? Our cutting-edge social media strategies will turn browsers into buyers!",
        img: IMG15.src,
        links: "#"
    },
    {
        title: "Fitness & Modeling",
        txt: "Want to flex your brand and gain followers? Our social media workouts will grow your audience and influence!",
        img: IMG16.src,
        links: "#"
    }, {
        title: "Spa and Salon",
        txt: "Want more clients to indulge in your services? Turn treatments into trending topics with our social media prowess!",
        img: IMG17.src,
        links: "#"
    }, {
        title: "Handyman",
        txt: "Struggling to showcase your skills and get booked? Highlight your expertise and attract clients with our effective social media!",
        img: IMG18.src,
        links: "#"
    }
    , {
        title: "Sports",
        txt: "Finding it hard to engage with fans? Score big and build a loyal fanbase with our engaging social media content!",
        img: IMG19.src,
        links: "#"
    }
    , {
        title: "Automotive",
        txt: "Need to drive more sales and engagement? Accelerate your online presence with our high-octane social media strategies!",
        img: IMG20.src,
        links: "#"
    }
    , {
        title: "Jewelry & Accessories",
        txt: "Want your pieces to shine online? Our social media sparkle will make your brand dazzle and attract customers!",
        img: IMG21.src,
        links: "#"
    }
    , {
        title: "Content Creators",
        txt: "Struggling to grow your audience and influence? Elevate your content and reach more followers with our social media strategies!",
        img: IMG22.src,
        links: "#"
    }, {
        title: "Event/Ticket Sales",
        txt: "Need to turn events into sell-out experiences? Create buzz and drive ticket sales with our captivating social media campaigns!",
        img: IMG23.src,
        links: "#"
    }
    , {
        title: "B2B Businesses",
        txt: "Finding it hard to build professional relationships? Enhance your brand awareness and connect with clients through targeted social media!",
        img: IMG24.src,
        links: "#"
    }
    , {
        title: "Construction",
        txt: "Struggling to showcase your projects? Highlight your expertise and attract clients with our robust social media plans!",
        img: IMG25.src,
        links: "#"
    }
    , {
        title: "Learning & Education",
        txt: "Want to engage more students? Educate and inspire with innovative social media strategies that connect!",
        img: IMG26.src,
        links: "#"
    }
    , {
        title: "Insurance",
        txt: "Need to build trust and educate clients? Simplify complex concepts and connect with customers through our informative social media content!",
        img: IMG27.src,
        links: "#"
    }
    , {
        title: "Engineering Firms",
        txt: "Finding it hard to highlight your expertise? Showcase your projects and attract clients with precise social media campaigns!",
        img: IMG28.src,
        links: "#"
    }
    , {
        title: "Animal & Pets",
        txt: "Want to create a paw-some online presence? Engage pet lovers and grow your brand with our pet-friendly social media strategies!",
        img: IMG29.src,
        links: "#"
    }
    , {
        title: "Hotel & Resorts",
        txt: "Need to turn stays into unforgettable stories? Attract travelers and inspire journeys with our captivating social media content!",
        img: IMG30.src,
        links: "#"
    }
    , {
        title: "Non-Profits & Causes",
        txt: "Struggling to raise awareness and support? Amplify your mission and connect with supporters through impactful social media campaigns!",
        img: IMG31.src,
        links: "#"
    }, {
        title: "Transportation and Logistics",
        txt: "Want to drive efficiency and build trust? Streamline your operations and connect with clients through our effective social media strategies!",
        img: IMG32.src,
        links: "#"
    }, {
        title: "Legal",
        txt: "Finding it hard to build credibility and connect with clients? Enhance your professional presence and trustworthiness with our legal-friendly social media campaigns!",
        img: IMG33.src,
        links: "#"
    }, {
        title: "Travel & Tours",
        txt: "Want to inspire more journeys and attract travelers? Make every destination a dream with our adventurous social media strategies!",
        img: IMG34.src,
        links: "#"
    }
]
const Industries = () => {
    return (
        <section className={`ptb-100 ${styles.industriesSec}`}>
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={8} className="text-center m-auto">
                        <h2>Transforming Businesses in
                            <span className="lastHeading"> Various Industries <TitleBorderLine /></span></h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xxl={12} xl={12} lg={12} className="m-auto p-0">
                        <IndustriesSlider slides={SLIDES} options={OPTIONS} />
                        <div className="btnTow marginAuto">
                            <Link href="#" className="buttonStyle" aria-label="Let’s Discuss Your Project">Let’s Discuss Your Project</Link>
                            <Link href="#" className="buttonStyle borderStyle" aria-label="Call Now">Call Now: 346-299-2202</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Industries