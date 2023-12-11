import styles from "./ListMenu.module.scss";
import { LuKeyRound } from "react-icons/lu";
import { LuBox } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { LuWallet2 } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { LuMessageSquare } from "react-icons/lu";

import {ReactComponent as ChevronIcon } from '../../assets/icon/chevron.svg'

export const ListMenu = () => {
  return (
    <>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <LuKeyRound className={styles.item__icon} />
          <h2 className={styles.item__title}>Dashboard</h2>
        </li>
        <li className={styles.menu__item}>
          <LuBox className={styles.item__icon} />
          <h2 className={styles.item__title}>Product</h2>
          <ChevronIcon className={styles.item__iconRight} />
        </li>
        <li className={styles.menu__item}>
          <FiUser className={styles.item__icon} />
          <h2 className={styles.item__title}>Customers</h2>
          <ChevronIcon className={styles.item__iconRight} />
        </li>
        <li className={styles.menu__item}>
          <LuWallet2 className={styles.item__icon} />
          <h2 className={styles.item__title}>Income</h2>
          <ChevronIcon className={styles.item__iconRight} />
        </li>
        <li className={styles.menu__item}>
          <TbDiscount2 className={styles.item__icon} />
          <h2 className={styles.item__title}>Promote</h2>
          <ChevronIcon className={styles.item__iconRight} />
        </li>
        <li className={styles.menu__item}>
          <LuMessageSquare className={styles.item__icon} />
          <h2 className={styles.item__title}>Help</h2>
          <ChevronIcon className={styles.item__iconRight} />
        </li>
      </ul>
    </>
  );
};
