import { Col, Container, Row } from "react-bootstrap"
import { DiscordLogo, FacebookLogo, GoogleLogo, InstagramLogo, LinkedINLogo, MessangerLogo, PinterestLogo, RedditLogo, SnapchatLogo, TelegramLogo, TikTokLogo, TitleBorderLine, TwitterLogo, WhatsAppLogo, YoutubeLogo } from "@/src/app/app-constants"
import styles from "@/styles/components/plateforms.module.scss"
const data = [
    {
        title: "Facebook",
        icon: <FacebookLogo />
    },
    {
        title: "Instagram",
        icon: <InstagramLogo />
    },
    {
        title: "Twitter",
        icon: <TwitterLogo />
    },
    {
        title: "Linkedin",
        icon: <LinkedINLogo />
    },
    {
        title: "Pinterest",
        icon: <PinterestLogo />
    },
    {
        title: "Snapchat",
        icon: <SnapchatLogo />
    },
    {
        title: "TikTok",
        icon: <TikTokLogo />
    },
    {
        title: "Reddit",
        icon: <RedditLogo />
    },
    {
        title: "WhatsApp",
        icon: <WhatsAppLogo />
    },
    {
        title: "Messenger",
        icon: <MessangerLogo />
    },
    {
        title: "Telegram",
        icon: <TelegramLogo />
    },
    {
        title: "Discord",
        icon: <DiscordLogo />
    },
    {
        title: "Google",
        icon: <GoogleLogo />
    },
    {
        title: "Youtube",
        icon: <YoutubeLogo />
    }

]
const Platforms = () => {
    return (
        <section className={`ptb-100 ${styles.platfromSec}`}>
            <Container>
                <Row>
                    <Col xxl={11} xl={12} lg={12} className="m-auto text-center">
                        <h2>Platforms <span className="lastHeading">We Work With<TitleBorderLine /></span> </h2>
                        <div className={styles.platfromBox}>
                            {data.map((item, index) => (
                                <div className={styles.platfromItem} key={index}>
                                    <div className={styles.platformIcon}>
                                        {item.icon}
                                        <div className={styles.platformName}>{item.title}</div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Platforms