import styles from './Tabs.module.scss'

interface TabItem {
  label: string
  value: string
}

interface TabsProps {
  active: string
  items: TabItem[]
  onChange: (value: string) => void
}

export const Tabs = ({ active, items, onChange }: TabsProps) => {
  return (
    <ul className={styles.tabs}>
      {items.map(({ label, value }) => {
        return (
          <li
            key={value}
            className={`${styles['tabs-tab']} ${value === active ? styles['tabs-tab-active'] : ''}`}
            onClick={() => {
              onChange(value)
            }}
          >
            <button>{label}</button>
          </li>
        )
      })}
    </ul>
  )
}
