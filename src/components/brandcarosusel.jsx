"use client"
import { React, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/components/brandslider.module.scss"
import KyleecampBell from "media/home/brands/@kyleecampbell.webp"
import JulesJessica from "media/home/brands/@julesjessica.webp"
import ListingWithLexi from "media/home/brands/@ListingWithLexi.webp"
import JaimeGabaldoni from "media/home/brands/@jaime_gabaldoni.webp"
import BlissedHappiness from "media/home/brands/@blissedhappiness.webp"
import PbadvanceDaeshetics from "media/home/brands/@pbadvancedaesthetics.webp"
import OdyssEyeLixir from "media/home/brands/@odysseyelixir.webp"
import Cece_Barnes from "media/home/brands/@cece_barnes.webp"
import JuliAkhara from "media/home/brands/@juliakhara.webp"
import { CarouselArrow } from '@/src/app/app-constants'

const data = [
    {
        title: "@kyleecampbell",
        img: KyleecampBell.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025063978/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d283dfca3cedf261ae45bed8cab7851db1615720816cfaf43f1e47bb014df32c"
    },
    {
        title: "@julesjessica",
        img: JulesJessica.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066117/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8d1a86947dcae31184561ad5f8fb908d67055513b640b4c40fd7312534178fb04"
    },
    {
        title: "@ListingWithLexi",
        img: ListingWithLexi.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066183/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9ffac14f02ce8697f6db1f3f70b5d434a23d5fdf1e9412a5f47571de8e9ec230"
    },
    {
        title: "@jaime_gabaldoni",
        img: JaimeGabaldoni.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066071/rendition/1080p/file.mp4?loc=external&log_user=0&signature=bad7c7d8ee92a5255fac15114d27d741de6ab32bf6d704a69f102ba25d8091fa"
    },
    {
        title: "@blissedhappiness",
        img: BlissedHappiness.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066007/rendition/720p/file.mp4?loc=external&log_user=0&signature=c3b1fd513e8b3d4de419bb2dbdfa09b1204254989f6f1b3da8373382ea13b6ea"
    },
    {
        title: "@pbadvancedaesthetics",
        img: PbadvanceDaeshetics.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066285/rendition/720p/file.mp4?loc=external&log_user=0&signature=b066eb183249e621627614175fe47e0f457c98a45846a87ff47ce719a6e66027"
    },
    {
        title: "@odysseyelixir",
        img: OdyssEyeLixir.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066238/rendition/1080p/file.mp4?loc=external&log_user=0&signature=46c97b9249be10bc57cd45bad5b1ce675c6e10b284f8a7f0cf54d4e91953ac61"
    },
    {
        title: "@cece_barnes",
        img: Cece_Barnes.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066042/rendition/720p/file.mp4?loc=external&log_user=0&signature=c0d7439d62c18c7485d83502527f1ea62fe0b02d9e3afd2ca667b378bbfa0cf9"
    },
    {
        title: "@juliakhara",
        img: JuliAkhara.src,
        videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1025066139/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3cb38a1ecd6989c375ae7cf2d0734c140ca327551422edce447ebddd1174c0e3"
    },
]

const BrandCarousel = ({ onVideoSelect }) => {
    const [emblaRef, embla] = useEmblaCarousel([
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        if (!embla) return;

        const updateButtons = () => {
            setIsPrevDisabled(!embla.canScrollPrev());
            setIsNextDisabled(!embla.canScrollNext());
        };

        embla.on('select', updateButtons);
        embla.on('init', () => embla.scrollTo(activeIndex));

        return () => {
            embla.off('select', updateButtons);
        };
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        const videoUrl = data[activeIndex].videoUrl;
        onVideoSelect(videoUrl);
        if (embla) {
            embla.scrollTo(activeIndex);
        }
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % data.length;
                const videoUrl = data[newIndex].videoUrl;
                embla.scrollTo(newIndex);
                onVideoSelect(videoUrl);
                return newIndex;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [embla, onVideoSelect]);

    const handleSlideClick = (index, videoUrl) => {
        setActiveIndex(index);
        onVideoSelect(videoUrl);
        embla.scrollTo(index);
    };

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={`${styles.embla__container}`}>
                {data.map((item, index) => (
                    <div
                        className={styles.embla__slide}
                        key={index}
                        onClick={() => handleSlideClick(index, item.videoUrl)}
                    >
                        <div className={styles.itemBrand} >
                            <div style={{ backgroundImage: `url(${item.img})` }} className={`${styles.itemImg} ${activeIndex === index ? `${styles.active}` : ''}`}>
                                <div className={styles.overlaySce}></div>
                                <div className={styles.itemName}>{item.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.embla__button__container}>
                <div className={`${styles.embla__prev} ${isPrevDisabled ? `${styles.disabled}` : ''}`} onClick={prevButtonHandler}>
                    <CarouselArrow direction="prev" />
                </div>
                <div className={`${styles.embla__next} ${isNextDisabled ? `${styles.disabled}` : ''}`} onClick={nextButtonHandler}>
                    <CarouselArrow direction="next" />
                </div>
            </div>
        </div>
    )
}

export default BrandCarousel
