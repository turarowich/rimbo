import styles from './LangSwitcher.module.scss'

import { ReactComponent as USAIcon } from 'assets/icons/usa.svg'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'
// import { ReactComponent as RussiaIcon } from 'assets/icons/russia.svg'

export const LangSwitcher = () => {
  return (
    <div className={styles['lang-switcher']}>
      <div className={styles.icon}>
        <USAIcon />
      </div>

      <span className={styles.lang}>En</span>

      <div className={styles.arrow}>
        <ArrowDownIcon />
      </div>
    </div>
  )
}
