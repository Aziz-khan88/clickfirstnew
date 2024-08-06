import { CarouselArrow, ClutchFav, PlayButton } from '@/src/app/app-constants';
import styles from "@/styles/components/testimonialslider.module.scss";
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Fade from 'embla-carousel-fade';
import VideoModal from '@/src/components/videomodal';

const TestimonilSlider = (props) => {
    const { slides, options } = props;
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay(), Fade()]);
    const [videoUrl, setvideoUrl] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideClick = (url) => {
        setModalShow(true);
        setvideoUrl(url);
    };
    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                setCurrentIndex(embla.selectedScrollSnap());
            });
        }
    }, [embla]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };

    return (
        <section className={`${styles.embla} testslider`}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.testimonialBox}>
                                <Row className='h-100'>
                                    <Col lg={6} md={6} className="mt-auto">
                                        <div className={styles.itemMain}>
                                            <div className={`${styles.txtItem} ${currentIndex === index ? 'animatedItem' : ''}`}>
                                                Our Result-Oriented SEO Services Come At The Most Sensible Rates Ever. We Propose Multiple Pricing SEO Packages To Best Suit Your Varying Budgets And Business Goals.
                                            </div>
                                            <div className={styles.testimonialInfo}>
                                                <div className={styles.testimonialName}>
                                                    <h6>{item?.name} <p>{item?.position}</p></h6>
                                                </div>
                                                <div className={styles.testimonialRating}>
                                                    <div className={styles.testimonialNumbers}>
                                                        4.9 / 5.0 <ClutchFav />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} className="my-auto">
                                        <div className={styles.testimonialImg}>
                                            <Image src={item.img} alt={item?.name} width={812} height={440} className={`${currentIndex === index ? 'zoom-out' : ''}`} />
                                            <div className={styles.playBtn} onClick={() => handleSlideClick(item.videoUrl)}><PlayButton /></div>
                                        </div>
                                        <VideoModal show={modalShow} videoUrl={videoUrl}
                                            onHide={() => setModalShow(false)} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__button__container">
                <div className="embla__prev" onClick={prevButtonHandler}>
                    <CarouselArrow direction="prev" />
                </div>
                <div className="embla__next" onClick={nextButtonHandler}>
                    <CarouselArrow direction="next" />
                </div>
            </div>
            <div className="embla__dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`embla__dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => embla && embla.scrollTo(index)}
                    >
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonilSlider;
