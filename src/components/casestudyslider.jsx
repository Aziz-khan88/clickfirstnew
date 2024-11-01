"use client";
import { useState, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import styles from "@/styles/home/casestudy.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ArrowYellow, CarouselArrow } from "@/src/app/app-constants";
import Autoplay from "embla-carousel-autoplay";
import VideoModal from "./videomodal";

const useInnerCarousel = (isActive, options) => {
    const [emblaRefImg, emblaInner] = useEmblaCarousel(
        options,
        [Autoplay({ delay: 1000 })]
    );

    useEffect(() => {
        if (emblaInner) {
            emblaInner.autoplay?.stop();
            if (isActive) {
                emblaInner.autoplay?.start();
            }
        }
    }, [isActive, emblaInner]);

    return emblaRefImg;
};

const CaseStudySlider = ({ slides, options }) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setModalShow(true);
    };


    const [emblaRef, embla] = useEmblaCarousel(
        options,
        [ClassNames(), Autoplay({ delay: 4000 })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (embla) {
            const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
            embla.on("select", onSelect);
            onSelect();
        }
    }, [embla]);

    const prevButtonHandler = () => embla && embla.scrollPrev();
    const nextButtonHandler = () => embla && embla.scrollNext();

    return (
        <div className="embla caseslider">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => {
                        const isActive = index === selectedIndex;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const emblaRefImg = useInnerCarousel(isActive, options);

                        return (
                            <div className="embla__slide embla__class-names" key={index}>
                                <div className={styles.caseBox}>
                                    <div className={styles.imgBox}>
                                        <section className="embla1">
                                            <div className="embla__viewport1" ref={emblaRefImg}>
                                                <div className="embla__container1">
                                                    {item.img.map((imges, imgIndex) => (
                                                        <div className="embla__slide1" key={imgIndex} onClick={() => handleImageClick(imges.src)}>
                                                            <Image
                                                                src={imges.src}
                                                                alt="Case Study Image"
                                                                width={350}
                                                                height={250}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className={styles.contentBox}>
                                        <div className={styles.durationDiv}>
                                            <div><span>Duration : </span>{item.duration} Months</div>
                                            <div>{item.web}</div>
                                        </div>
                                        <h5>{item.title} </h5>
                                        <p>{item.txt}</p>
                                        <div className="btnTow">
                                            <Link href="#" className="buttonStyle" aria-label="Read Case Study">
                                                Learn More
                                            </Link>
                                            <Link href="tel:346-299-2202" className="buttonStyle borderStyle" aria-label="Call Now">
                                                Call Now: 346-299-2202
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.statsBox}>
                                        {item.stats.map((stat, statIndex) => (
                                            <div className={styles.statsItem} key={statIndex}>
                                                <div className={styles.points}>
                                                    <ArrowYellow /> {stat.points}
                                                </div>
                                                <h6>{stat.tit}</h6>
                                            </div>
                                        ))}

                                        {item.logos?.logo && (
                                            <div className={styles.logoBox} >
                                                <Image
                                                    src={item.logos.logo}
                                                    alt="Case Study Logo"
                                                    width={item.logos.width}
                                                    height={item.logos.height}
                                                />
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
                        className={`embla__dot ${selectedIndex === index ? "active" : ""}`}
                        onClick={() => embla && embla.scrollTo(index)}
                    >
                        {selectedIndex === index && <p className="embla__bar__active"></p>}
                    </div>
                ))}
            </div>
            <VideoModal show={modalShow}
                onHide={() => setModalShow(false)}
                isImg={selectedImageUrl}
                imageUrl={selectedImageUrl} />
        </div>
    );
};

export default CaseStudySlider;
