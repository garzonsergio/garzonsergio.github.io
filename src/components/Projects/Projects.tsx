import styles from "./Projects.module.css"

export function Projects() {
    return (
        <section className={styles.projects} id="myprojects">
            <div className={styles.container}>
                <div className={styles.navigator}>
                    <div className={styles.close}></div>
                    <div className={styles.minimize}></div>
                    <div className={styles.maximize}></div>
                </div>
                <h1 className={styles.projectsTitle}>{`Geoportal`}</h1><h3 className={styles.projectsText}>Sistema de Alerta Temprana</h3>
                <div className={styles.picture}>

                </div>
            </div>
        </section>
    )
}
