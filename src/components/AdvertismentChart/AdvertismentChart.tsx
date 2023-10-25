import { Line } from 'react-chartjs-2'
import type { ChartData, ChartArea, ChartOptions, ScriptableTooltipContext, Point } from 'chart.js'
import { Chart as ChartJS, Filler, LineElement, Tooltip } from 'chart.js'

import { AdvertismentTypesCarousel, Box } from '..'

import { useTheme } from 'hooks'

import styles from './AdvertismentChart.module.scss'
import { Theme } from 'providers/Theme/Context'

ChartJS.register(LineElement, Filler, Tooltip)

function generateRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const AdvertismentChart = () => {
  const { theme } = useTheme()

  const generateLabels = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const lastMonthDay = new Date(year, month, 0).getDate()

    return new Array(lastMonthDay).fill(null).map((_, idx) => idx + 1)
  }

  const advertisments = [
    {
      name: 'IBV',
      value: 0.2,
      growth: 7.55
    },
    {
      name: 'Banner',
      value: 0.15,
      growth: 1.63
    },
    {
      name: 'VAST',
      value: 0.6,
      growth: 2.55
    },
    {
      name: 'Rewarded video',
      value: 0.8,
      growth: -3.32
    },
    {
      name: 'Native',
      value: 1,
      growth: -3.32
    }
  ]

  const createTooltip = (chart: ChartJS<'line', (number | Point | null)[], unknown>, theme: Theme) => {
    if (!chart || !chart.canvas || !chart.canvas.parentNode) return

    let tooltipEl = chart.canvas.parentNode.querySelector('div') || null

    if (!tooltipEl) {
      tooltipEl = document.createElement('div')
      tooltipEl.style.background = theme === Theme.LIGHT ? '#fff' : '#313C82'
      tooltipEl.style.borderRadius = '8px'
      tooltipEl.style.padding = '24px'
      tooltipEl.style.color = '#2E324E'
      tooltipEl.style.opacity = '1'
      tooltipEl.style.pointerEvents = 'none'
      tooltipEl.style.position = 'absolute'
      tooltipEl.style.transform = 'translate(-50%, calc(-100% - 34px))'
      tooltipEl.style.transition = 'all .1s ease'
      tooltipEl.style.zIndex = '1000'
      tooltipEl.style.width = '237px'
      tooltipEl.style.boxSizing = 'border-box'
      tooltipEl.style.fontFamily = 'Inter'
      tooltipEl.style.boxShadow = '0px 0px 40px -8px rgba(0, 0, 0, 0.06), 0px 32px 48px -8px rgba(0, 0, 0, 0.04)'

      const container = document.createElement('table')
      container.style.position = 'relative'
      container.style.margin = '0px'
      container.style.width = '100%'

      const triangleContainer = document.createElement('div')
      triangleContainer.style.position = 'aboslute'
      triangleContainer.style.bottom = '0'
      triangleContainer.style.left = '0'

      const triangle = document.createElement('div')
      triangle.style.display = 'flex'
      triangle.style.position = 'absolute'
      triangle.style.bottom = '-10px'
      triangle.style.left = '50%'
      triangle.style.transform = 'translate(-50%, 0)'
      triangle.style.zIndex = '10'
      triangle.style.width = '0'
      triangle.style.height = '0'
      triangle.style.borderLeft = '10px solid transparent'
      triangle.style.borderTop = theme === Theme.LIGHT ? '12px solid #fff' : '12px solid #313C82'
      triangle.style.borderRight = '10px solid transparent'
      triangle.style.borderBottom = '0 solid transparent'

      triangleContainer.appendChild(triangle)
      tooltipEl.appendChild(triangleContainer)
      tooltipEl.appendChild(container)
      chart.canvas.parentNode.appendChild(tooltipEl)
    } else {
      const triangleContainer = tooltipEl.querySelector('div') as HTMLDivElement
      const triangle = triangleContainer.querySelector('div') as HTMLDivElement

      if (triangle) {
        triangle.style.borderTop = theme === Theme.LIGHT ? '12px solid #fff' : '12px solid #313C82'
      }

      tooltipEl.style.background = theme === Theme.LIGHT ? '#fff' : '#313C82'
    }

    return tooltipEl
  }

  const externalTooltipHandler = (context: ScriptableTooltipContext<'line'>, theme: Theme) => {
    // Tooltip Element
    const { chart, tooltip } = context

    const tooltipEl = createTooltip(chart, theme)
    if (!tooltipEl) return

    // Hide if no tooltip
    if (tooltipEl && tooltip.opacity === 0) {
      tooltipEl.style.opacity = '0'
      return
    }

    // Set Text
    if (tooltip.body) {
      const dataLabels = advertisments.map(({ name }) => name)

      const head = document.createElement('thead')

      // TITLE START
      const row = document.createElement('tr')
      // row.style.color = theme === Theme.LIGHT ? 'green' : 'red'
      row.style.color = theme === Theme.LIGHT ? '#2E324E' : '#e6f3f2'

      const title = document.createElement('th')

      title.style.fontFamily = 'Inter'
      title.style.fontSize = '20px'
      title.style.lineHeight = '24px'
      title.style.fontWeight = '400'
      title.style.textAlign = 'left'
      title.style.paddingBottom = '8px'
      const text = document.createTextNode('15 Oct, 2022')

      title.appendChild(text)
      row.appendChild(title)
      head.appendChild(row)

      // TITLE END

      // BODY START
      const body = document.createElement('tbody')
      body.style.display = 'flex'
      body.style.flexDirection = 'column'
      body.style.width = '100%'
      body.style.gap = '8px'

      dataLabels.forEach((name) => {
        const dotCell = document.createElement('td')
        dotCell.style.background = '#C058F1'
        dotCell.style.borderWidth = '0'
        dotCell.style.marginRight = '8px'
        dotCell.style.height = '8px'
        dotCell.style.width = '8px'
        dotCell.style.borderRadius = '50%'
        dotCell.style.padding = '0'
        dotCell.style.margin = '0'

        const row = document.createElement('tr')
        row.style.display = 'flex'
        row.style.alignItems = 'center'
        row.style.gap = '8px'
        row.style.width = '100%'
        row.style.fontFamily = 'Inter'
        row.style.color = theme === Theme.LIGHT ? '#2E324E' : '#e6f3f2'
        row.style.fontSize = '14px'
        row.style.lineHeight = '20px'

        const labelCell = document.createElement('td')
        const labelText = document.createTextNode(name)
        labelCell.style.padding = '0'
        labelCell.style.margin = '0'
        labelCell.style.flexGrow = '1'
        labelCell.appendChild(labelText)

        const valueCell = document.createElement('td')
        valueCell.style.margin = '0 0 0 auto'
        valueCell.style.padding = '0'
        const valueText = document.createTextNode('0.2%')
        valueCell.appendChild(valueText)

        row.appendChild(dotCell)
        row.appendChild(labelCell)
        row.appendChild(valueCell)
        body.appendChild(row)
      })

      // BODY END

      const root = tooltipEl.querySelector('table')

      if (!root) return

      // Remove old children
      while (root.firstChild) {
        root.firstChild.remove()
      }

      // Add new children
      root.appendChild(head)
      root.appendChild(body)
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas

    // Display, position, and set styles for font
    tooltipEl.style.opacity = '1'
    tooltipEl.style.left = positionX + tooltip.caretX + 'px'
    tooltipEl.style.top = positionY + tooltip.caretY + 'px'
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px'
  }

  const data: ChartData<'line'> = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Dataset 1',
        data: new Array(generateLabels().length).fill(null).map(() => generateRandomNumber(200, 300)),
        borderColor: '#5DE5E8',
        cubicInterpolationMode: 'monotone',
        borderWidth: 2,
        pointRadius: 10,
        pointBorderWidth: 4,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: '#4162D7',
        pointHoverBorderColor: '#E6F3F2',
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return

          return createGradient(ctx, chartArea, 'aqua')
        },
        order: 0
      },
      {
        label: 'Dataset 1',
        data: new Array(generateLabels().length).fill(null).map(() => generateRandomNumber(100, 300)),
        borderColor: '#8F3BB7',
        cubicInterpolationMode: 'monotone',
        borderWidth: 2,
        pointRadius: 10,
        pointBorderWidth: 4,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: '#4162D7',
        pointHoverBorderColor: '#E6F3F2',
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return

          return createGradient(ctx, chartArea, 'purple')
        },
        order: 1
      }
    ]
  }

  const chartOptionsDark: ChartOptions<'line'> = {
    aspectRatio: 1296 / 310,
    plugins: {
      tooltip: {
        enabled: false,
        padding: 24,
        external: (context) => externalTooltipHandler(context as ScriptableTooltipContext<'line'>, Theme.DARK)
      }
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          offset: false,
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

  const chartOptionsLight: ChartOptions<'line'> = {
    aspectRatio: 1296 / 310,
    plugins: {
      tooltip: {
        enabled: false,
        padding: 24,
        external: (context) => externalTooltipHandler(context as ScriptableTooltipContext<'line'>, Theme.LIGHT)
      }
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          offset: false,
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

  function createGradient(ctx: CanvasRenderingContext2D, chartArea: ChartArea, color: string) {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)

    if (color === 'purple') {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      gradient.addColorStop(1, 'rgba(71, 83, 190, 0.10)')
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      gradient.addColorStop(1, 'rgba(94, 236, 230, 0.10)')
    }

    return gradient
  }

  return (
    <section className={styles['advertisment-chart']}>
      <div className='wrapper'>
        <div className={styles['scroll-container']}>
          <Box>
            <AdvertismentTypesCarousel />

            <div className={styles.chart}>
              {theme === Theme.LIGHT ? (
                <Line data={data} options={chartOptionsLight} />
              ) : (
                <Line data={data} options={chartOptionsDark} />
              )}
            </div>
          </Box>

          <ul className={styles['chart-labels']}>
            {generateLabels()
              .filter((value, idx) => value % 5 === 0 || idx === 0)
              .map((value) => {
                const currentDate = new Date()
                const monthLabel = currentDate.toDateString().slice(4, 8)

                return (
                  <li key={value}>
                    {value} {monthLabel}
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </section>
  )
}
