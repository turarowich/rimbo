import styles from './Heading.module.scss'

type Variant = 'h1' | 'h2' | 'h3'

interface HeadingProps {
  children: React.ReactNode
  variant?: Variant
}

export const Heading = ({ children, variant = 'h2' }: HeadingProps) => {
  switch (variant) {
    case 'h1':
      return <h1 className={styles.heading}>{children}</h1>
    case 'h2':
      return <h2 className={styles.heading}>{children}</h2>
    case 'h3':
      return <h3 className={styles.heading}>{children}</h3>
  }
}
