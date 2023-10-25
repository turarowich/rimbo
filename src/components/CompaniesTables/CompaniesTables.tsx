import { useState } from 'react'

import { Tabs } from 'ui'
import { Box, TargetingTable, WhiteListTable, CreativesTable, CitiesTable, PlacementTable } from '..'

import styles from './CompaniesTables.module.scss'

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'

export const CompaniesTables = () => {
  const tabs = [
    { label: 'Placement', value: 'placement' },
    { label: 'White list', value: 'white-list' },
    { label: 'Black list', value: 'black-list' },
    { label: 'Targeting', value: 'targeting' },
    { label: 'Cities', value: 'cities' },
    { label: 'Creatives', value: 'creatives' }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].value)

  const getTabContent = (value: string) => {
    switch (value) {
      case 'placement':
        return <PlacementTable />
      case 'white-list':
        return <WhiteListTable />
      case 'black-list':
        return <WhiteListTable />
      case 'targeting':
        return <TargetingTable />
      case 'cities':
        return <CitiesTable />
      case 'creatives':
        return <CreativesTable />
    }
  }

  return (
    <div className={styles['companies-tables']}>
      <div className='wrapper'>
        <Box>
          <div className={styles['top-line']}>
            <Tabs active={activeTab} onChange={setActiveTab} items={tabs} />

            <button className={styles.button}>
              Export <ArrowDownIcon />
            </button>
          </div>

          <div className={styles.content}>{getTabContent(activeTab)}</div>
        </Box>
      </div>
    </div>
  )
}
