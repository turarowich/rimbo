import { Line } from 'react-chartjs-2'
import type { ChartData, ChartArea, ChartOptions } from 'chart.js'
import { Chart as ChartJS, Filler, LineElement } from 'chart.js'

import styles from './GrowthChart.module.scss'

import { ReactComponent as ArrowTopIcon } from 'assets/icons/arrow-top.svg'

interface GrowthChartProps {
  value: number
}

ChartJS.register(LineElement, Filler)

export const GrowthChart = ({ value }: GrowthChartProps) => {
  const isNegative = value < 0

  function createGradient(ctx: CanvasRenderingContext2D, chartArea: ChartArea, isNegativeChart: boolean) {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)

    if (isNegativeChart) {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      gradient.addColorStop(1, 'rgba(143, 59, 183, 0.5)')
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      gradient.addColorStop(1, 'rgba(94, 236, 230, 0.5)')
    }

    return gradient
  }

  const data: ChartData<'line'> = {
    labels: new Array(12).fill(null).map((_, idx) => `${idx}`),
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 20, 40, 5, 60, 50, 80, 100, 80, 70, 90, 10],
        borderColor: isNegative ? '#c058f1' : '#57c2f1',
        cubicInterpolationMode: 'monotone',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return

          return createGradient(ctx, chartArea, isNegative)
        }
      }
    ]
  }

  const chartOptions: ChartOptions<'line'> = {
    aspectRatio: 120 / 36,
    plugins: {
      tooltip: {
        enabled: false
      }
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }

  return (
    <div className={`${styles['growth-chart']} ${isNegative ? styles.negative : styles.positive}`}>
      <div className={styles.top}>
        <span>
          {isNegative ? null : '+'} {value}%
        </span>

        <span className={styles.arrow}>
          <ArrowTopIcon />
        </span>
      </div>

      <div className={styles.chart}>
        <Line data={data} options={chartOptions} />
      </div>
    </div>
  )
}
