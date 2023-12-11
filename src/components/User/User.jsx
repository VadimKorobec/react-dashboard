import styles from "./User.module.scss";
import user from "../../assets/img/Ellipse 8.png";

export const User = () => {
    return (
      <div className={styles.user__wrapper}>
        <img src={user} alt="user" />
        <div className={styles.title__wrapper}>
          <h3 className={styles.user__title}>Evano</h3>
          <p className={styles.user__text}>Project Manager</p>
        </div>
      </div>
    );
};
