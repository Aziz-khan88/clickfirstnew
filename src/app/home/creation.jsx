import { Col, Container, Row } from "react-bootstrap"
import ImgSlider from "@/src/components/imgslider"
import styles from "@/styles/home/creation.module.scss"
// Last Week
import IMG01 from "media/home/creation/img_01.webp"
import IMG02 from "media/home/creation/img_02.webp"
import IMG03 from "media/home/creation/img_03.webp"
import IMG08 from "media/home/creation/img_08.webp"
// Earlire Month
import IMG09 from "media/home/creation/img__01.webp"
import IMG10 from "media/home/creation/img__02.webp"
import IMG11 from "media/home/creation/img__03.webp"
import IMG12 from "media/home/creation/img__04.webp"
import IMG13 from "media/home/creation/img__05.webp"
import IMG14 from "media/home/creation/img__06.webp"
import IMG16 from "media/home/creation/img__08.webp"
import IMG17 from "media/home/creation/img__09.webp"
import IMG18 from "media/home/creation/img__10.webp"
// Last Month

import IMG21 from "media/home/creation/img___02.webp"
import IMG25 from "media/home/creation/img___06.webp"
import IMG26 from "media/home/creation/img___07.webp"
import IMG27 from "media/home/creation/img___08.webp"
import IMG28 from "media/home/creation/img___09.webp"
import IMG29 from "media/home/creation/img___10.webp"
import IMG30 from "media/home/creation/img___11.webp"
import IMG32 from "media/home/creation/img___12.webp"

// Earlire Year

import IMG33 from "media/home/creation/img_1.webp"
import IMG34 from "media/home/creation/img_2.webp"
import IMG35 from "media/home/creation/img_3.webp"
import IMG36 from "media/home/creation/img4.webp"
import IMG37 from "media/home/creation/img_5.webp"
import IMG38 from "media/home/creation/img_6.webp"
import IMG39 from "media/home/creation/img7.webp"
import IMG41 from "media/home/creation/img_9.webp"
import IMG42 from "media/home/creation/img_10.webp"
import IMG43 from "media/home/creation/img_11.webp"
import IMG44 from "media/home/creation/img_12.webp"
import IMG45 from "media/home/creation/img_13.webp"

// Along time Ago
import IMG47 from "media/home/creation/img_t_2.webp"
import IMG48 from "media/home/creation/img_t_3.webp"
import IMG49 from "media/home/creation/img_t_4.webp"
import IMG50 from "media/home/creation/img_t_5.webp"
import IMG51 from "media/home/creation/img_t_6.webp"
import IMG52 from "media/home/creation/img_t_7.webp"
import IMG53 from "media/home/creation/img_t_8.webp"
import IMG54 from "media/home/creation/img_t_9.webp"
import IMG55 from "media/home/creation/img_t_10.webp"
import IMG58 from "media/home/creation/img_t_13.webp"
import IMG59 from "media/home/creation/img_t_14.webp"
import IMG60 from "media/home/creation/img_t__15.webp"
import IMG61 from "media/home/creation/img_t__16.webp"
import IMG62 from "media/home/creation/img_t_17.webp"
import IMG63 from "media/home/creation/img_t_18.webp"
import IMG64 from "media/home/creation/img_t_19.webp"
import IMG65 from "media/home/creation/img_t_20.webp"
import IMG66 from "media/home/creation/img_t_21.webp"
import IMG68 from "media/home/creation/img_t_23.webp"
import IMG69 from "media/home/creation/img_t_24.webp"
import IMG70 from "media/home/creation/img_t_25.webp"
import IMG71 from "media/home/creation/img_t_26.webp"
import IMG72 from "media/home/creation/img_t_27.webp"
import IMG73 from "media/home/creation/img_t_28.webp"
import { TitleBorderLine } from "../app-constants"

const SLIDES1 = [
    { img: IMG12.src },
    { img: IMG16.src },
    { img: IMG66.src },
    { img: IMG21.src },
    { img: IMG42.src },
    { img: IMG71.src },
    { img: IMG73.src },
    { img: IMG47.src },
    { img: IMG51.src },
    { img: IMG52.src },
    { img: IMG58.src },
    { img: IMG29.src },
    { img: IMG33.src },
    { img: IMG35.src },
    { img: IMG01.src },
    { img: IMG08.src },
    { img: IMG09.src },
    { img: IMG38.src },
    { img: IMG63.src },
];
const SLIDES2 = [
    { img: IMG02.src },
    { img: IMG10.src },
    { img: IMG13.src },
    { img: IMG17.src },
    { img: IMG25.src },
    { img: IMG27.src },
    { img: IMG28.src },
    { img: IMG32.src },
    { img: IMG34.src },
    { img: IMG37.src },
    { img: IMG41.src },
    { img: IMG45.src },
    { img: IMG43.src },
    { img: IMG48.src },
    { img: IMG53.src },
    { img: IMG59.src },
    { img: IMG62.src },
    { img: IMG65.src },
    { img: IMG70.src },
];

const SLIDES3 = [
    { img: IMG03.src },
    { img: IMG11.src },
    { img: IMG14.src },
    { img: IMG18.src },
    { img: IMG26.src },
    { img: IMG36.src },
    { img: IMG30.src },
    { img: IMG39.src },
    { img: IMG44.src },
    { img: IMG49.src },
    { img: IMG50.src },
    { img: IMG54.src },
    { img: IMG55.src },
    { img: IMG61.src },
    { img: IMG60.src },
    { img: IMG64.src },
    { img: IMG68.src },
    { img: IMG69.src },
    { img: IMG72.src },
];

const OPTIONS1 = { align: 'start', dragFree: true, direction: 'rtl', loop: true }
const OPTIONS2 = { align: 'end', dragFree: true, loop: true }
const Creation = () => {
    return (
        <section className={styles.creationSec}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} className="text-center m-auto">
                        <h2>Your Thoughts, <span className="lastHeading">Our Creation.<TitleBorderLine /></span></h2>
                        <ImgSlider slides={SLIDES1} options={OPTIONS2} />
                        <ImgSlider slides={SLIDES2} options={OPTIONS1} />
                        <ImgSlider slides={SLIDES3} options={OPTIONS2} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Creation