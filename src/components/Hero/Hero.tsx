import styles from "./Hero.module.css"

export function Hero() {
    return (
        <section className={styles.hero}>
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
                    
                </div>
                <div className={styles.notch}></div>
                <div className={styles.keyboard}></div>
                <div className={styles.pad}></div>
            </div>

        </section>
    )
}
