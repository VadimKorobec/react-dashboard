import styles from "./Item.module.scss";

export const Item = ({ item }) => {
  return (
    <li className={styles.item}>
      <h2 className={styles.item__text}>{item.name}</h2>
      <p className={styles.item__text}>{item.company}</p>
      <a className={styles.item__text} href={item.phone}>
        {item.phone}
      </a>
      <a className={styles.item__text} href={item.email}>
        {item.email}
      </a>
      <p className={styles.item__text}>{item.country}</p>
      {item.status === true ? (
        <button type="button" className={styles.active}>
          Active
        </button>
      ) : (
        <button type="button" className={styles.inactive}>Inactive</button>
      )}
    </li>
  );
};
