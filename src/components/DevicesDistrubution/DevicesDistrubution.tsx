import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement } from 'chart.js'

import { Box, Heading } from '..'

import { useTheme } from 'hooks'
import { Theme } from 'providers/Theme/Context'

import styles from './DevicesDistrubution.module.scss'

ChartJS.register(ArcElement)

export const DevicesDistrubution = () => {
  // const devices = [
  //   { label: 'Mobile', percent: 50 },
  //   { label: 'Dekstop', percent: 25 },
  //   { label: 'Other', percent: 25 }
  // ]

  const { theme } = useTheme()

  const data = {
    labels: ['Mobile', 'Dekstop', 'Other'],
    datasets: [
      {
        label: 'devices distribution',
        data: [50, 25, 25],
        borderColor: ['#c058f1', '#4854bf', theme === Theme.LIGHT ? '#d4d7f4' : '#5fede7'],
        borderWidth: 5
      }
    ]
  }

  return (
    <div className={styles['devices-distribution']}>
      <Box>
        <Heading variant='h3'>Device</Heading>

        <div className={styles.content}>
          <div className={styles.chart}>
            <Doughnut
              data={data}
              options={{
                cutout: 100
              }}
            />
          </div>

          <ul className={styles.legend}>
            <li className={styles['legend-row']}>
              <span className={styles['legend-row-circle']}></span>
              <span className={styles['legend-row-label']}>Mobile</span>
            </li>

            <li className={styles['legend-row']}>
              <span className={styles['legend-row-circle']}></span>
              <span className={styles['legend-row-label']}>Desktop</span>
            </li>

            <li className={styles['legend-row']}>
              <span className={styles['legend-row-circle']}></span>
              <span className={styles['legend-row-label']}>Other</span>
            </li>
          </ul>
        </div>
      </Box>
    </div>
  )
}
