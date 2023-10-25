import { Heading, DevicesDistrubution, TopCitiesDistribution, AudienceDistribution } from '..'

import styles from './AudienceCharts.module.scss'

export const AudienceCharts = () => {
  return (
    <section className={styles['audience-charts']}>
      <div className='wrapper'>
        <Heading variant='h2'>Charts</Heading>

        <div className={styles['charts-list']}>
          <DevicesDistrubution />
          <TopCitiesDistribution />
          <AudienceDistribution />
        </div>
      </div>
    </section>
  )
}
