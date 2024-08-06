
"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from "../../styles/components/solutioncarousel.module.scss"
import IMG01 from "../../public/home/solution/solution01.png"
import IMG02 from "../../public/home/solution/solution02.png"
import IMG03 from "../../public/home/solution/solution03.png"
import IMG04 from "../../public/home/solution/solution04.png"
import IMG05 from "../../public/home/solution/solution05.png"
import IMG06 from "../../public/home/solution/solution06.png"
import IMG07 from "../../public/home/solution/solution07.png"


const data = [
    {
        title: "Awareness",
        txt: "Show your Ads to people who are most likely to remember them.",
        img: IMG01.src
    },
    {
        title: "Sales",
        txt: "Find people likely to purchase your product or service.",
        img: IMG02.src
    }
    ,
    {
        title: "Leads",
        txt: "Collect leads for your business via instant forms, messages, calls, and sign-ups.",
        img: IMG03.src
    },
    {
        title: "Appointmentss",
        txt: "Encourage customers to book appointments directly with your business.",
        img: IMG04.src
    },
    {
        title: "App Installs",
        txt: "Promote your app to drive downloads and increase user engagement.",
        img: IMG05.src
    },
    {
        title: "Website Traffic",
        txt: "Direct potential customers to your website to explore your offerings.",
        img: IMG06.src
    },
    {
        title: "Messages/Calls",
        txt: "Facilitate direct communication with your customers through messages and calls.",
        img: IMG07.src
    }
]

const SolutionCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={`${styles.embla__container}`}>
                {data.map((item, index) => (
                    <div className={`${styles.embla__slide}`} key={index}>
                        <div className={styles.itemSolution} >
                            <div className={styles.itemImg} style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.itemText}>{item.txt}</div>
                            </div>
                            <div className={styles.itemName}>{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SolutionCarousel