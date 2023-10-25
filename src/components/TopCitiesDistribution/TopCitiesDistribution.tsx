import { Box, Heading } from '..'
import { Progress } from 'ui'

import styles from './TopCitiesDistribution.module.scss'

export const TopCitiesDistribution = () => {
  const cities = [
    { label: 'Ad-Dilam', percent: 10.3 },
    { label: 'Al-Abwa', percent: 24.3 },
    { label: 'Gatgat', percent: 19.9 },
    { label: 'Habaala', percent: 18.4 },
    { label: 'Yanbu', percent: 18.4 },
    { label: 'Zulfi', percent: 18.4 }
  ]

  return (
    <div className={styles['top-cities-distribution']}>
      <Box>
        <Heading variant='h3'>Top cities</Heading>

        <ul className={styles.list}>
          {cities.map(({ label, percent }) => {
            return (
              <li key={label} className={styles['list-item']}>
                <span>{label}</span>

                <Progress items={[{ width: percent, bgColor: 'linear-gradient(180deg, #58C4F1 0%, #4D83F8 100%)' }]} />

                <span>{percent} %</span>
              </li>
            )
          })}
        </ul>
      </Box>
    </div>
  )
}
