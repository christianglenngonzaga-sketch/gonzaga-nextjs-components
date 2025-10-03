import styles from "../styles/ProfileCard.module.css"

export default function ProfileCard() {
  return (
    <div className={styles.pc_box}>
      <img
        src="Ako.png"
        alt="profile"
        className={styles.pc_img}
      />
      <h3 className={styles.pc_nm}>Christian Gonzaga</h3>
      <p className={styles.pc_ag}>Age: 25</p>
      <p className={styles.pc_ds}>Loves spending weekends gaming online</p>
    </div>
  )
}
