import styles from './Search.module.scss'
import  search from '../../assets/icon/search.svg'

export const Search = () => {
    return (
      <div className={ styles.input__wrapper} _>
        <img className={styles.input__icon} src={search} alt="icon" />
        <input className={styles.input} type="text" placeholder="Search" />
      </div>
    );
}