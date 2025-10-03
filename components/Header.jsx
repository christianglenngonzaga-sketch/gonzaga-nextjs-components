import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.hd_wrp}>
      <h1 className={styles.hd_ttl}>My Profile</h1>
      <h2 className={styles.hd_sub}>Christian Gonzaga</h2>
    </header>
  )
}
