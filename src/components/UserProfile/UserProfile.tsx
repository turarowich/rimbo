import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'

import styles from './UserProfile.module.scss'

import avatarImg from 'assets/img/avatar.png'
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'

export const UserProfile = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false)

  // const notificationsCount = 3

  return (
    <div className={styles['user-profile']}>
      {/* <div className={styles.notifications}>
        <BellIcon />
        <span className={styles['notifications-count']}>{notificationsCount}</span>
      </div> */}

      <Popup
        open={isUserDropdownOpen}
        position='bottom right'
        arrow={false}
        offsetY={2}
        offsetX={8}
        onOpen={() => {
          setUserDropdownOpen(true)
        }}
        onClose={() => {
          setUserDropdownOpen(false)
        }}
        trigger={
          <button className={`${styles['dropdown-button']} ${isUserDropdownOpen ? styles.active : ''}`}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt='avatar' />
            </div>

            <div className={styles['arrow-down']}>
              <ArrowDownIcon />
            </div>
          </button>
        }
      >
        <div className={styles['dropdown-menu']}>
          <ul>
            <li className={styles['menu-item']}>
              <Link to='#'>Profile</Link>
            </li>

            {/* <li className={styles['menu-item']}>
              <Link to='#'>Settings</Link>
            </li> */}

            <li className={styles['menu-item']}>
              <button type='button'>
                <LogoutIcon /> <span>Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </Popup>
    </div>
  )
}
