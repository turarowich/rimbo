import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Popup from 'reactjs-popup'
import { useState } from 'react'

import { Checkbox, Pagination } from 'ui'

import styles from './CreativesTable.module.scss'

import { ReactComponent as SortIcon } from 'assets/icons/sort.svg'
import { ReactComponent as ColumnsIcon } from 'assets/icons/columns.svg'
import { ReactComponent as DragIcon } from 'assets/icons/drag.svg'

interface DataItem {
  name: string
  status: string
  approved: string
  size: string
  impressions: string
  clicks: string
  ctr: string
  coverage: string
  frequency: string
  videoFirstQuartile: string
  videoSecondQuartile: string
  videoThirdQuartile: string
  videoComplete: string
}

export const CreativesTable = () => {
  const [isColumnsPopupOpen, setColumnsPopupOpen] = useState(false)

  const data: DataItem[] = [
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      clicks: '1,566',
      ctr: '0.032',
      coverage: '94,543',
      frequency: '1.3',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    }
  ]

  const columnHelper = createColumnHelper<DataItem>()

  const columns = [
    columnHelper.accessor('name', {
      header: 'name'
    }),
    columnHelper.accessor('status', {
      header: 'status'
    }),
    columnHelper.accessor('approved', {
      header: 'approved'
    }),
    columnHelper.accessor('size', {
      header: 'size'
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
    columnHelper.accessor('coverage', {
      header: 'coverage'
    }),
    columnHelper.accessor('frequency', {
      header: 'frequency'
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

  const columnsNames = Object.keys(data[0])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles['creatives-table']}>
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

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

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

      <Pagination />
    </div>
  )
}
