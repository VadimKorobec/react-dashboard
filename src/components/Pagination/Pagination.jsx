import styles from "./Pagination.module.scss";
import { ReactComponent as IconRight } from "../../assets/icon/_.svg";
import { ReactComponent as IconLeft } from "../../assets/icon/_ (1).svg";

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.pagination__title}>
        Showing data 1 to 8 of 256K entries
      </h2>
      <div className={styles.pagination__wrapper}>
        <div className={styles.icon__wrapper}>
          <IconLeft />
        </div>
        <ul className={styles.pagination__list}>
          <li className={styles.pagitation__item}>1</li>
          <li className={styles.pagitation__item}>2</li>
          <li className={styles.pagitation__item}>3</li>
          <li className={styles.pagitation__item}>4</li>
          <li>...</li>
          <li className={styles.pagitation__item}>40</li>
        </ul>
        <div className={styles.icon__wrapper}>
          <IconRight />
        </div>
      </div>
    </div>
  );
};
