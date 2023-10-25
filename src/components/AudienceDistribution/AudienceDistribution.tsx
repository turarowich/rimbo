import { Box, Heading } from '..'
import { Progress } from 'ui'

import { useTheme } from 'hooks/useTheme'

import styles from './AudienceDistribution.module.scss'
import { Theme } from 'providers/Theme/Context'

export const AudienceDistribution = () => {
  const { theme } = useTheme()

  const audience = [
    { label: '18-24', femalePercent: 25, malePercent: 25, unknownPercent: 50, totalPercent: 10.4 },
    { label: '25-34', femalePercent: 25, malePercent: 25, unknownPercent: 50, totalPercent: 10.4 },
    { label: '35-44', femalePercent: 25, malePercent: 25, unknownPercent: 50, totalPercent: 10.4 },
    { label: '45-64', femalePercent: 25, malePercent: 25, unknownPercent: 50, totalPercent: 10.4 },
    { label: '65+', femalePercent: 25, malePercent: 25, unknownPercent: 50, totalPercent: 10.4 }
  ]

  return (
    <div className={styles['audience-distribution']}>
      <Box>
        <Heading variant='h3'>Audience</Heading>

        <ul className={styles.list}>
          {audience.map(({ label, femalePercent, malePercent, unknownPercent, totalPercent }) => {
            return (
              <li key={label} className={styles['list-item']}>
                <span>{label}</span>

                <Progress
                  items={[
                    { width: femalePercent, bgColor: 'linear-gradient(180deg, #58C4F1 0%, #4D83F8 100%)' },
                    { width: malePercent, bgColor: 'linear-gradient(180deg, #C058F1 0%, #712893 100%)' },
                    { width: unknownPercent, bgColor: theme === Theme.LIGHT ? '#D4D7F4' : '#4854BF' }
                  ]}
                />

                <span>{totalPercent} %</span>
              </li>
            )
          })}
        </ul>

        <ul className={styles['legend-list']}>
          <li className={styles['legend-list-item']}>
            <span className={styles['legend-list-circle']} />
            <span>Female</span>
          </li>

          <li className={styles['legend-list-item']}>
            <span className={styles['legend-list-circle']} />
            <span>Male</span>
          </li>

          <li className={styles['legend-list-item']}>
            <span className={styles['legend-list-circle']} />
            <span>Unknown</span>
          </li>
        </ul>
      </Box>
    </div>
  )
}
