import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Pagination } from 'ui'

import styles from './TargetingTable.module.scss'

import { ReactComponent as SortIcon } from 'assets/icons/sort.svg'

interface DataItem {
  type: string
  name: string
  value: string
}

export const TargetingTable = () => {
  const data: DataItem[] = [
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    },
    {
      type: 'Аудитория',
      name: 'Пол',
      value: 'Мужской'
    }
  ]

  const columnHelper = createColumnHelper<DataItem>()

  const columns = [
    columnHelper.accessor('type', {
      header: 'type'
    }),
    columnHelper.accessor('name', {
      header: 'name'
    }),
    columnHelper.accessor('value', {
      header: 'value'
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles['targeting-table']}>
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
