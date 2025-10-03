import styles from "../styles/SkillsList.module.css"

export default function SkillsList() {
  return (
    <section className={styles.sk_sec}>
      <h3 className={styles.sk_ttl}>Skills</h3>
      <ul className={styles.sk_row}>
        <li className={styles.sk_itm}>Java</li>
        <li className={styles.sk_itm}>Singing</li>
        <li className={styles.sk_itm}>Dancing</li>
      </ul>
    </section>
  )
}
