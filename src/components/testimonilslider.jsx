import { CarouselArrow, ClutchFav, PlayButton } from '@/src/app/app-constants';
import styles from "@/styles/components/testimonialslider.module.scss";
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Fade from 'embla-carousel-fade';
import VideoPlayer from './videoplayer';

const TestimonilSlider = (props) => {
    const { slides, options } = props;
    const autoplayRef = useRef(Autoplay()); // Create a ref to store the Autoplay instance
    const [emblaRef, embla] = useEmblaCarousel(options, [Fade()]);
    const [videoUrl, setVideoUrl] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideClick = (url) => {
        setIsActive(true);
        setVideoUrl(url);
    };

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                setCurrentIndex(embla.selectedScrollSnap());
                setIsActive(false);
                setVideoUrl("");
            });
        }
    }, [embla]);

    const prevButtonHandler = () => {
        if (embla) {
            embla.scrollPrev();
            autoplayRef.current.play(); // Restart autoplay
        }
    };

    const nextButtonHandler = () => {
        if (embla) {
            embla.scrollNext();
            autoplayRef.current.play(); // Restart autoplay
        }
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
                                                {item.txt}
                                            </div>
                                            <div className={styles.testimonialInfo}>
                                                <div className={styles.testimonialName}>
                                                    <h6>{item?.name}
                                                        <p>{item?.position}</p>
                                                    </h6>
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
                                            {isActive && currentIndex === index ? (
                                                <VideoPlayer testVideo={videoUrl} />
                                            ) : (
                                                <>
                                                    <Image
                                                        src={item.img}
                                                        alt={item?.name}
                                                        width={812}
                                                        height={440}
                                                        className={`${currentIndex === index ? 'zoom-out' : ''}`}
                                                    />
                                                    <div className={styles.playBtn} onClick={() => handleSlideClick(item.videoUrl)}>
                                                        <PlayButton />
                                                    </div>
                                                </>
                                            )}
                                        </div>

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
                        {currentIndex === index ?
                            <p className='embla__bar__active'></p>
                            : ''
                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonilSlider;
