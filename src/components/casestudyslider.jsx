"use client"
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import styles from "@/styles/home/casestudy.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowYellow, CarouselArrow } from '@/src/app/app-constants';
import Autoplay from 'embla-carousel-autoplay'

const CaseStudySlider = (props) => {
    const { slides, options } = props;
    const [emblaRef, embla] = useEmblaCarousel(options, [ClassNames()]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };

    const onSelect = () => {
        if (embla) {
            setSelectedIndex(embla.selectedScrollSnap());
        }
    };

    useEffect(() => {
        if (embla) {
            embla.on('select', onSelect);
            onSelect(); // Initial selection
        }
    }, [embla]);

    return (
        <div className="embla caseslider">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide embla__class-names" key={index}>
                            <div className={styles.caseBox}>
                                <div className={styles.imgBox}>
                                    <Image src={item.img} alt="click First" width={1110} height={250} />
                                </div>
                                <div className={styles.contentBox}>
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                    <div className="btnTow">
                                        <Link href="#" className="buttonStyle">Read Case Study</Link>
                                        <Link href="tel:346-299-2202" className="buttonStyle borderStyle">Call Now: 346-299-2202</Link>
                                    </div>
                                </div>
                                <div className={styles.statsBox}>
                                    {item.stats.map((stat, statIndex) => (
                                        <div className={styles.statsItem} key={statIndex}>
                                            <div className={styles.points}>
                                                <ArrowYellow /> {stat.points} %
                                            </div>
                                            <h6>{stat.tit}</h6>
                                        </div>
                                    ))}
                                </div>
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
                        className={`embla__dot ${selectedIndex === index ? 'active' : ''}`}
                        onClick={() => embla && embla.scrollTo(index)}
                    >
                    </div>
                ))}
            </div>
        </div >
    );
};

export default CaseStudySlider;
