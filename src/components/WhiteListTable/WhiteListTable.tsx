import { Pagination } from 'ui'

import styles from './WhiteListTable.module.scss'

export const WhiteListTable = () => {
  const data = new Array(24).fill(null).map((_, idx) => `http://ninjaflex${idx + 1}.com`)

  return (
    <div className={styles['white-list-table']}>
      <ul className={styles.list}>
        {data.map((value) => (
          <li key={value} className={styles.row}>
            {value}
          </li>
        ))}
      </ul>

      <Pagination />
    </div>
  )
}
