import { Link } from 'react-router-dom'

import { ROUTE_NAMES } from 'core/router'

import { ReactComponent as LogoImg } from 'assets/img/logo.svg'

import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <Link to={ROUTE_NAMES.OVERVIEW} className={styles.logo}>
      <LogoImg width={40} height={40} />
      <span>rimbo</span>
    </Link>
  )
}
