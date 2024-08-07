import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import styles from "@/styles/components/industryslider.module.scss"
import Link from 'next/link'
import { ArrowIcon, CarouselArrow } from '@/src/app/app-constants'

const IndustriesSlider = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay(), ClassNames()]);

    // useEffect(() => {
    //     if (embla) {
    //         embla.on('select', () => {
    //             setCurrentIndex(embla.selectedScrollSnap());
    //         });
    //     }
    // }, [embla]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.embla} embla_for_active`}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((item, index) => (
                        <div className={`${styles.embla__slide} ${styles.embla__class}`} key={index} >
                            < div className={styles.industriesBox} style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.industriesText}>
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                    <Link href={item.links}>Learn More <ArrowIcon /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.embla__button__container}>
                <div className={styles.embla__prev} onClick={prevButtonHandler}>
                    <CarouselArrow direction="prev" />
                </div>
                <div className={styles.embla__next} onClick={nextButtonHandler}>
                    <CarouselArrow direction="next" />
                </div>
            </div>
        </section>
    )
}

export default IndustriesSlider