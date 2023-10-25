import { Logo } from '..'

import styles from './HeaderAuth.module.scss'

export const HeaderAuth = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}
