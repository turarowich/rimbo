import { Checkbox } from 'ui'
import { Box, GrowthChart, Heading } from '..'

import styles from './AdvertismentType.module.scss'

interface AdvertismentTypeProps {
  heading: string
  value: number
  growth: number
}

export const AdvertismentType = ({ heading, value, growth }: AdvertismentTypeProps) => {
  return (
    <div className={styles['advertisment-type']}>
      <Box>
        <div className={styles.top}>
          <span className={styles['top-circle']} />
          <Heading variant='h3'>{heading}</Heading>
          <Checkbox name={heading} />
        </div>

        <Heading variant='h2'>{value} %</Heading>

        <GrowthChart value={growth} />
      </Box>
    </div>
  )
}
