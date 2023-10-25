import { useState } from 'react'

import { usePagination } from 'hooks'

import styles from './Pagination.module.scss'

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'

export const Pagination = () => {
  const [activePage, setActivePage] = useState(1)

  const pages = new Array(10).fill(null).map((_, idx) => idx + 1)

  const paginationRange = usePagination({
    currentPage: activePage,
    totalCount: pages.length,
    pageSize: 1
  })

  const isPrevAvailable = activePage !== 1
  const isNextAvailable = activePage < pages.length

  const toPrevPage = () => {
    if (activePage !== 1) {
      setActivePage(activePage - 1)
    }
  }

  const toNextPage = () => {
    if (pages.length > activePage) {
      setActivePage(activePage + 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <button className={`${styles.button} ${!isPrevAvailable ? styles['button-disabled'] : ''}`} onClick={toPrevPage}>
        {isPrevAvailable ? <ArrowDownIcon /> : null}
      </button>

      {paginationRange?.map((pageNumber, idx) => {
        if (pageNumber === 'ellipsis')
          return (
            <div key={`ellipsis-${idx}`} className={styles.button}>
              &#8230;
            </div>
          )

        const isActive = activePage === pageNumber

        return (
          <button
            key={pageNumber}
            className={`${styles.button} ${isActive ? styles['button-active'] : ''}`}
            onClick={() => {
              if (typeof pageNumber === 'number') {
                setActivePage(pageNumber)
              }
            }}
          >
            {pageNumber}
          </button>
        )
      })}

      <button className={`${styles.button} ${!isNextAvailable ? styles['button-disabled'] : ''}`} onClick={toNextPage}>
        {isNextAvailable ? <ArrowDownIcon /> : null}
      </button>
    </div>
  )
}
