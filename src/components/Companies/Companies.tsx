import { CompaniesCarousel, Heading } from 'components'

import styles from './Companies.module.scss'

import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'

interface CompaniesProps {
  title: string
}

export const Companies = ({ title }: CompaniesProps) => {
  const totalCPM = 0.54
  const totalCPC = 0.13
  const totalCTR = 0.0032

  return (
    <section className={styles.companies}>
      <div className={styles.background}>
        <div className={styles.light}></div>
      </div>

      <div className='wrapper'>
        <Heading variant='h1'>{title}</Heading>

        <div className={styles['total-row']}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span>
                Total cpm
                <button className={styles['item-arrow']}>
                  <ArrowDownIcon />
                </button>
              </span>
              <span>{totalCPM}</span>
            </li>

            <li className={styles.item}>
              <span>Total cpc</span>
              <span>{totalCPC}</span>
            </li>

            <li className={styles.item}>
              <span>Total ctr</span>
              <span>{totalCTR}</span>
            </li>
          </ul>

          {/* <button className={styles['new-company-button']}>
            <span>
              <PlusIcon />
            </span>
            New company
          </button> */}
        </div>

        <CompaniesCarousel />
      </div>
    </section>
  )
}
