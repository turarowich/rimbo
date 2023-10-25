import { Pagination } from 'ui'

import styles from './PlacementTable.module.scss'

export const PlacementTable = () => {
  const data = new Array(24).fill(null).map((_, idx) => `http://ninjaflex${idx + 1}.com`)

  return (
    <div className={styles['placement-table']}>
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
