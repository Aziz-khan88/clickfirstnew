import VideoPlayer from '@/src/components/videoplayer'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/home/banner.module.scss';
import { AdvertisingIcon } from '@/src/app/app-constants'
import BannerImg from "media/home/mobile/MobileBannerBottom.webp"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className={styles.homeSec}>
            <Container>
                <Row>
                    <Col>
                        <VideoPlayer video={"home/click-first-banner-video.mp4"} />
                        <div className={styles.bannerContent}>
                            <div className={styles.bannerTagline}>No. 1 SMM Company In US</div>
                            <h1><span>Digital Marketing Agency</span></h1>
                            <div className={styles.bannerTitle}>Equipping Businesses for the Digital Era</div>
                        </div>
                        <div className={styles.mobileBannerImg}>
                            <Image src={BannerImg} alt="Mobile Banner Click First" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner