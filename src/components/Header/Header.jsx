import styles from "./Header.module.scss";
import headerSvg from "../../assets/icon/setting.svg";
import { ListMenu } from "../ListMenu/ListMenu";
import { User } from "../User/User";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <Container>
      <div className={styles.header__container}>
        <div className={styles.title__wrapper}>
          <img className={styles.title__icon} src={headerSvg} alt="icon" />
          <h1 className={styles.header__title}>Dashboard</h1>
          <p className={styles.header__text}>v.01</p>
        </div>
        <ListMenu />
        <User />
      </div>
    </Container>
  );
};
