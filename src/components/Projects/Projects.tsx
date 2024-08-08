import { ProjectPreview } from "../ProjectPreview/ProjectPreview"
import styles from "./Projects.module.css"

export function Projects() {
    return (
        <section className={styles.projects} id="myprojects">
            <ProjectPreview
                imageUrl="/project1pic.webp"
                title="Geoportal"
                href="https://geoportal.siata.gov.co/"
                description="Designed with automatic polling and optimized for high concurrency, this web application serves as the primary tool for Medellín’s early warning system and the surrounding towns. It provides real-time information on levels, air quality sensors, and other risk factors to prevent harm to citizens."
                tags={
                    [{ name: "TypeScript", color: "#007acc", },
                    { name: "React", color: "cyan" },
                    { name: "Material UI", color: "#1976d2" },
                    { name: "Leaflet", color: "#199900" },
                    { name: "React Query", color: "#ff4154" },
                    ]}
            />

            <ProjectPreview
                imageUrl="/duckHunting.png"
                backgroundSize="auto 80%"
                title="Duck Hunter"
                href="https://codepen.io/garzonsergio/pen/yLXxvNo"
                description="Inspired by the classic NES game ‘Duck Hunt,’ this game is an application made entirely with HTML and CSS, showcasing the maximum possibilities of a JS-free app."
                tags={
                    [{ name: "HTML", color: "#dd4b25", },
                    { name: "CSS", color: "#254bdd" }]} />

        </section>
    )
}

