import { Chart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  BarController,
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
  ChartData,
  ChartType,
  DefaultDataPoint,
  CartesianTickOptions as TickProps,
  ChartOptions,
  ChartDataset
} from 'chart.js'

import { Box } from '..'

import { useTheme } from 'hooks/useTheme'
import { Theme } from 'providers/Theme/Context'

import styles from './BarChart.module.scss'

type Dataset = Partial<ChartDataset<ChartType, DefaultDataPoint<ChartType>>>

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, LineController, BarController)

const max = 120
const min = 25

const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

function generateRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRandomDataToBarDataset = () => {
  return {
    ...barBaseDataset,
    data: labels.map(() => generateRandomNumber(min, max))
  }
}

const barBaseDataset: Dataset = {
  type: 'bar' as const,
  backgroundColor: '#5DE5E8',
  hoverBackgroundColor: '#5DE5E8',
  categoryPercentage: 1,
  barPercentage: 0.67,
  order: 1
}

const barDatasets = new Array(11).fill(null).map(generateRandomDataToBarDataset)

export const BarChart = () => {
  const { theme } = useTheme()

  const data: ChartData<ChartType, DefaultDataPoint<ChartType>, string> = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        data: [75, 100, 129, 75, 100, 140, 80, 130],
        borderColor: '#8F3BB7',
        borderWidth: 2,
        fill: false,
        cubicInterpolationMode: 'monotone',
        pointRadius: 0,
        pointHoverRadius: 0,
        order: 0
      },
      ...barDatasets
    ]
  }

  const tickStyles: Partial<TickProps> = {
    color: theme === Theme.LIGHT ? '#ABADB8' : 'rgba(255, 255, 255, 0.6)',
    align: 'inner',
    font: {
      family: 'Inter',
      size: 14,
      weight: '300'
    }
  }

  const chartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1296 / 195,
    plugins: {
      tooltip: {
        enabled: false
      }
    },
    scales: {
      y: {
        ticks: {
          ...tickStyles,
          padding: 8,
          stepSize: 50
        },
        border: {
          display: false
        },
        grid: {
          lineWidth: 0.87,
          color: theme === Theme.LIGHT ? '#F3F3F3' : '#444866',
          drawTicks: false
        }
      },
      x: {
        offset: false,
        ticks: {
          ...tickStyles
        },
        border: {
          display: false
        },
        grid: {
          offset: false,
          lineWidth: 1.245,
          tickWidth: 1.245,
          color: theme === Theme.LIGHT ? '#E3E3E3' : '#414563'
        }
      }
    }
  }

  return (
    <section className={styles['bar-chart']}>
      <div className='wrapper'>
        <Box>
          <ul className={styles['values-list']}>
            <li className={styles['values-list-item']}>
              <span className={styles['values-list-circle']} />
              <span>Value 1 (1)</span>
            </li>

            <li className={styles['values-list-item']}>
              <span className={styles['values-list-circle']} />
              <span>Value 2 (2)</span>
            </li>
          </ul>

          <div className={styles.chart}>
            <Chart type='bar' data={data} options={chartOptions} />
          </div>
        </Box>
      </div>
    </section>
  )
}
