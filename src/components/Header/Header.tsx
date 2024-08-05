import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
        <figure className={styles.figure}>
            <img className={styles.logo} alt="logo Sergio Camilo" src="https://i.imgur.com/Xg6gX0n.png" />
        </figure>
        <ul className={styles.navbar}>
            <li className={styles.toggle}></li>
            <li className={styles.item} id="work">Work</li>
            <li className={styles.item} id="contact">Contact</li>
        </ul>
    </header>
  )
}
