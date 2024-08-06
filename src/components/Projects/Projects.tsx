import { ProjectPreview } from "../ProjectPreview/ProjectPreview"
import styles from "./Projects.module.css"

export function Projects() {
    return (
        <section className={styles.projects} id="myprojects">
            <ProjectPreview
                imageUrl="/project1pic.webp"
                title="Project 1"
                description="This is a project description" />

            <ProjectPreview
                imageUrl="/duckHunting.png"
                backgroundSize="auto 80%"
                title="Duck Hunter"
                description="Inspired by the classic NES game ‘Duck Hunt,’ this game is an application made entirely with HTML and CSS, showcasing the maximum possibilities of a JS-free app." />

        </section>
    )
}
