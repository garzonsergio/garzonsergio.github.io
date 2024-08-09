import { Button, Tag } from "antd"
import { BulbOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from "react";

import styles from "./ProjectPreview.module.css"

interface TechTagProps {
    name: string
    color: string
}
interface ProjectPreviewProps {
    style?: React.CSSProperties
    backgroundSize?: string
    backgroundPosition?: string
    imageUrl: string
    title: string
    description: string
    href: string
    tags: TechTagProps[]
}

export function ProjectPreview({ style, imageUrl, backgroundSize = "100% 100%", backgroundPosition = "center", title, description, href, tags }: ProjectPreviewProps) {
    const [showDescription, setShowDescription] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.navigator}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: `${backgroundSize}`,
                    backgroundPosition: `${backgroundPosition}`,
                    ...style
                }}>
                <h3>{title}</h3>
                <div className={styles.close}></div>
                <div className={styles.minimize}></div>
                <div className={styles.maximize}></div>
            </div>

            <div className={styles.info}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>

                    <div className={styles.tagContainer}>
                        {tags.map(
                            (tag) =>
                                <Tag color={tag.color} style={{ fontWeight: 500, fontSize: "1.4rem" }}>
                                    {tag.name}
                                </Tag>)}
                    </div>
                    <Button className={`${styles.buttonMore} ${showDescription ? styles.show : ""}`} type="primary" ghost shape="circle" icon={<PlusOutlined />} onClick={() => setShowDescription(!showDescription)} />
                </div>
                <br />

                <p className={`${styles.description} ${showDescription ? styles.show : ''}`}>{description}</p> <></>

                <br />
                <div className={styles.buttons}>
                    <Button
                        type="primary"
                        icon={<BulbOutlined />}
                        iconPosition="end"
                        href={href}
                        target="_blank"
                        style={{ textDecoration: 'none', color: `black`, fontWeight: 'bold' }}
                    >
                        Visit Project
                    </Button>
                </div>
            </div>
        </div >
    )
}
