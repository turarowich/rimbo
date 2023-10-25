import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import { Logo, ThemeSwitcher, UserProfile } from 'components'

import { ROUTE_NAMES, RouteNamesValues } from 'core/router'

import avatarImg from 'assets/img/avatar.png'
import { ReactComponent as LayersIcon } from 'assets/icons/layers.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg'
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'

import styles from './Header.module.scss'

interface NavItem {
  label: string
  href: RouteNamesValues
  icon: React.ReactElement
}

export const Header = () => {
  const { pathname } = useLocation()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const nav: NavItem[] = [
    { label: 'Overview', href: ROUTE_NAMES.OVERVIEW, icon: <LayersIcon /> },
    { label: 'Companies settings', href: ROUTE_NAMES.COMPANIES_SETTINGS, icon: <SettingsIcon /> }
  ]

  const navItems = nav.map(({ label, href, icon }) => {
    const isActive = pathname === href

    return (
      <li key={href}>
        <Link to={href} className={isActive ? styles.active : undefined}>
          {icon}
          <span>{label}</span>
        </Link>
      </li>
    )
  })

  return (
    <header className={`${styles.header} ${isMobileMenuOpen ? styles['header-fixed'] : ''}`}>
      <div className='wrapper'>
        <Logo />

        <nav className={styles.nav}>
          <ul>{navItems}</ul>
        </nav>

        <div className={styles.right}>
          <ThemeSwitcher />
          {/* <LangSwitcher /> */}
          <UserProfile />
        </div>

        <button
          className={styles['mobile-menu-button']}
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen)
          }}
        >
          {!isMobileMenuOpen ? <HamburgerIcon /> : <CrossIcon />}
        </button>

        <div className={`${styles['mobile-menu']} ${isMobileMenuOpen ? styles['mobile-menu-open'] : ''}`}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt='avatar' />

              <div className={styles.notifications}>
                <span>3</span>
              </div>
            </div>

            <div className={styles['profile-right']}>
              <span>Ashfak Sayem</span>
              <span>ashfaksayem@gmail.com</span>
            </div>
          </div>

          <nav className={styles['nav-mobile']}>
            <ul>
              {navItems}

              <li>
                <button>
                  <LogoutIcon /> <span>Log out</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className={styles['theme-switcher-container']}>
            <ThemeSwitcher fullWidth />
          </div>
        </div>
      </div>
    </header>
  )
}
