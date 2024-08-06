import styles from "./Hero.module.css"
import { Carousel } from "antd"
import { LinkedinFilled, GithubFilled, MailFilled } from "@ant-design/icons"


export function Hero() {
    return (
        <section className={styles.hero} id="aboutme" >
            <h1 className={styles.heroTitle}>
                {`Sergio Camilo Garzón`}
            </h1>
            <h3 className={styles.heroText}>
                Frontend Developer & Mechanical Engineer
            </h3>
            <div className={styles.bulbTrack}>
                <div className={`${styles.bulb} ${styles.top}`}></div>
                <div className={`${styles.bulb} ${styles.screw1}`}></div>
                <div className={`${styles.bulb} ${styles.screw2}`}></div>
                <div className={`${styles.bulb} ${styles.screw3}`}></div>

            </div>
            <div></div>
            <div className={styles.containerPhone}>
                <div className={styles.screen}>
                    <Carousel
                        arrows
                        className={styles.screenCarousel}
                        infinite>
                        <div className={styles.screenSlide}>
                            <a href="https://www.linkedin.com/in/scamilogarzon/" target="_blank" >
                                <LinkedinFilled />
                            </a>
                        </div>
                        <div className={styles.screenSlide}>
                            <a href="https://github.com/garzonsergio" target="_blank">
                                <GithubFilled />
                            </a>
                        </div>
                        <div className={styles.screenSlide}>
                            <a href="mailito:scgarzonp@gmail.com">
                                <MailFilled />
                            </a>
                        </div>

                    </Carousel>
                </div>
                <div className={styles.notch}></div>
                <div className={styles.keyboard}></div>
                <div className={styles.pad}></div>
            </div>

        </section>
    )
}
