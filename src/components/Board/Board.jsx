import { ListItems } from '../ListItems/listItems';

import styles from './Board.module.scss'
import {Search} from '../Search/Search'

export const Board = () => {
    return (
      <div className={styles.board__container}>
        <div className={styles.board__wrapper}>
          <div className={styles.title__wrapper}>
            <h2 className={styles.board__title}>All Customers</h2>
            <p className={styles.board__text}>Active Members</p>
          </div>
          <Search />
        </div>
        <ul className={styles.board__list}>
          <li style={{marginRight:'57px',marginLeft:'38px'}}>
            <h3 className={styles.item__title}>Customer Name</h3>
          </li>
          <li style={{marginRight:'61px'}}>
            <h3 className={styles.item__title}>Company</h3>
          </li>
          <li style={{marginRight:'52px'}}>
            <h3 className={styles.item__title}>Phone Number</h3>
          </li>
          <li style={{marginRight:'168px'}}>
            <h3 className={styles.item__title}>Email</h3>
          </li>
          <li style={{marginRight:'96px'}}>
            <h3 className={styles.item__title}>Country</h3>
          </li>
          <li>
            <h3 className={styles.item__title}>Status</h3>
          </li>
        </ul>
        <ListItems/>
      </div>
    );
}