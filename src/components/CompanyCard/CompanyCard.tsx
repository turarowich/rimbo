import { Heading } from '..'

import styles from './CompanyCard.module.scss'

interface CompanyCardProps {
  isActive: boolean
  name: string
  impressions: number
  spent: number
  clicks: number
  onClick: () => void
}

export const CompanyCard = ({ isActive, name, impressions, spent, clicks, onClick }: CompanyCardProps) => {
  return (
    <div className={`${styles['company-card']} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <Heading variant='h3'>{name}</Heading>

      <div className={styles.stats}>
        <div className={styles['stats-item']}>
          <span>Impressions</span>
          <span>{new Intl.NumberFormat('en-US').format(impressions)}</span>
        </div>

        <div className={styles['stats-item']}>
          <span>Spent</span>
          <span>$ {new Intl.NumberFormat('en-US').format(spent)}</span>
        </div>

        <div className={styles['stats-item']}>
          <span>Clicks</span>
          <span>{new Intl.NumberFormat('en-US').format(clicks)}</span>
        </div>
      </div>
    </div>
  )
}
