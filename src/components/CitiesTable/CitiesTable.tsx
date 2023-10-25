import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Pagination } from 'ui'

import styles from './CitiesTable.module.scss'

import flagSrc from 'assets/img/flag.png'

import { ReactComponent as SortIcon } from 'assets/icons/sort.svg'

interface DataItem {
  number: string
  name: string
  flag: string
  IP: string
}

export const CitiesTable = () => {
  const data: DataItem[] = [
    {
      number: '1',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '2',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '3',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '4',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '5',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '6',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '7',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    },
    {
      number: '8',
      name: 'Abha',
      flag: flagSrc,
      IP: '181.215.178.253'
    }
  ]

  const columnHelper = createColumnHelper<DataItem>()

  const columns = [
    columnHelper.accessor('number', {
      header: 'Number'
    }),
    columnHelper.accessor('name', {
      header: 'Name'
    }),
    columnHelper.accessor('flag', {
      header: 'Flag',
      cell: ({ getValue }) => {
        return <img src={getValue()} alt='flag' />
      }
    }),
    columnHelper.accessor('IP', {
      header: 'Ip'
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles['cities-table']}>
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
