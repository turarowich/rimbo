import styles from './TextField.module.scss'

import { ReactComponent as LockIcon } from 'assets/icons/lock.svg'
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg'

interface TextFieldProps {
  name: string
  type: string
  placeholder: string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

export const TextField = ({ name, type = 'text', placeholder, endAdornment }: TextFieldProps) => {
  return (
    <div className={styles['text-field']}>
      {type === 'email' ? (
        <span>
          <EmailIcon />
        </span>
      ) : null}

      {type === 'password' ? (
        <span>
          <LockIcon />
        </span>
      ) : null}

      <input name={name} type={type} placeholder={placeholder} />

      {endAdornment ? <span>{endAdornment}</span> : null}
    </div>
  )
}
