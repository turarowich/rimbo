import { useState } from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Popup from 'reactjs-popup'

import { Box, Heading } from '..'
import { Checkbox, DatePicker } from 'ui'

import styles from './TrafficTable.module.scss'

import { ReactComponent as SortIcon } from 'assets/icons/sort.svg'
import { ReactComponent as ColumnsIcon } from 'assets/icons/columns.svg'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'
import { ReactComponent as DragIcon } from 'assets/icons/drag.svg'

interface DataItem {
  id: number
  date: string
  currency: string
  impressions: string
  clicks: string
  ctr: string
  cpm: string
  cpv: string
  cpc: string
  spent: string
  coverage: string
  frequency: string
  viewbillity: string
  videoFirstQuartile: string
  videoSecondQuartile: string
  videoThirdQuartile: string
  videoComplete: string
}

export const TrafficTable = () => {
  const [isColumnsPopupOpen, setColumnsPopupOpen] = useState(false)

  const data: DataItem[] = [
    {
      id: 121324555,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324556,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324557,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324558,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324559,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324560,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324561,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      id: 121324562,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    }
  ]

  const columnsNames = Object.keys(data[0])

  const columnHelper = createColumnHelper<DataItem>()

  const columns = [
    columnHelper.accessor('id', {
      header: 'id'
    }),
    columnHelper.accessor('date', {
      header: 'date'
    }),
    columnHelper.accessor('currency', {
      header: 'currency'
    }),
    columnHelper.accessor('impressions', {
      header: 'impressions'
    }),
    columnHelper.accessor('clicks', {
      header: 'clicks'
    }),
    columnHelper.accessor('ctr', {
      header: 'ctr'
    }),
    columnHelper.accessor('cpm', {
      header: 'cpm'
    }),
    columnHelper.accessor('cpv', {
      header: 'cpv'
    }),
    columnHelper.accessor('cpc', {
      header: 'cpc'
    }),
    columnHelper.accessor('spent', {
      header: 'spent'
    }),
    columnHelper.accessor('coverage', {
      header: 'coverage'
    }),
    columnHelper.accessor('frequency', {
      header: 'frequency'
    }),
    columnHelper.accessor('viewbillity', {
      header: 'viewbillity'
    }),
    columnHelper.accessor('videoFirstQuartile', {
      header: 'videoFirstQuartile'
    }),
    columnHelper.accessor('videoSecondQuartile', {
      header: 'videoSecondQuartile'
    }),
    columnHelper.accessor('videoThirdQuartile', {
      header: 'videoThirdQuartile'
    }),
    columnHelper.accessor('videoComplete', {
      header: 'videoComplete'
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles['traffic-table']}>
      <div className='wrapper'>
        <Heading variant='h2'>Traffic</Heading>

        <Box>
          <div className={styles['top-line']}>
            <DatePicker />

            <div className={styles['top-line-right']}>
              <Popup
                open={isColumnsPopupOpen}
                position='bottom right'
                arrow={false}
                offsetY={0}
                offsetX={0}
                onOpen={() => {
                  setColumnsPopupOpen(true)
                }}
                onClose={() => {
                  setColumnsPopupOpen(false)
                }}
                trigger={
                  <button className={`${styles.button} ${isColumnsPopupOpen ? styles['button-columns-active'] : ''}`}>
                    Columns <ColumnsIcon />
                  </button>
                }
              >
                <div className={styles['columns-dropdown']}>
                  <form>
                    <ul>
                      {columnsNames.map((name) => {
                        return (
                          <li key={name}>
                            <Checkbox name={name} />

                            <span>{name}</span>

                            <button type='button'>
                              <DragIcon />
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </form>
                </div>
              </Popup>

              <button className={styles.button}>
                Export <ArrowDownIcon />
              </button>
            </div>
          </div>

          <div className={styles['table-container']}>
            <div className={styles.table}>
              <table>
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}

                          <span>
                            <SortIcon />
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}
