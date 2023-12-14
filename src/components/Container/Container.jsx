import styles from "./Container.module.scss";

export const Container = (props) => {
  return <div className={styles.root}>{props.children}</div>;
};
