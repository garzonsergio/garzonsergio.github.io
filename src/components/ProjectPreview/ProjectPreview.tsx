import { Button } from "antd/es/radio"
import styles from "./ProjectPreview.module.css"

interface ProjectPreviewProps {
    style?: React.CSSProperties
    backgroundSize?: string
    backgroundPosition?: string
    imageUrl: string
    title: string
    description: string
}

export function ProjectPreview({ style, imageUrl, backgroundSize = "100% 100%", backgroundPosition = "center", title, description }: ProjectPreviewProps) {
    return (
        <div className={styles.container}>
            <div className={styles.navigator}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: `${backgroundSize}`,
                    backgroundPosition: `${backgroundPosition}`,
                    ...style
                }}>
                <div className={styles.close}></div>
                <div className={styles.minimize}></div>
                <div className={styles.maximize}></div>
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.buttons}>
                    <Button type="primary">View</Button>
                    {/* <Button>Code</Button> */}
                </div>
            </div>
        </div>

    )
}
