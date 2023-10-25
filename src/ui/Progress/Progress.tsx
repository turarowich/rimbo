import styles from './Progress.module.scss'

interface Item {
  width: number
  bgColor: string
}

interface ProgressProps {
  items: Item[]
}

export const Progress = ({ items }: ProgressProps) => {
  return (
    <div className={styles.progress}>
      {items.map(({ width, bgColor }, idx, arr) => {
        const leftOffset = arr.slice(0, idx).reduce((total, curr) => curr.width + total, 0)

        return (
          <div
            key={bgColor}
            className={styles.item}
            style={{
              left: `${leftOffset}%`,
              width: `${width}%`,
              background: bgColor,
              borderRadius: arr.length === 1 ? '6px' : 0
            }}
          />
        )
      })}
    </div>
  )
}
