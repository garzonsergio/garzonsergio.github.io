import styles from "./Hero.module.css"

export function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className="hero-title">
                App Developer & Mechanical Engineer
            </h1>
            <h3 className="hero-text">
                website in construction by Sergio Camilo Garzón
            </h3>
            <div className="bulb-track">
                <div className="bulb top"></div>
                <div className="bulb screw1"></div>
                <div className="bulb screw2"></div>
                <div className="bulb screw3"></div>

            </div>
            <div className="container-phone">
                <div className="cellphone"></div>
                <div className="notch"></div>
            </div>

        </section>
    )
}
