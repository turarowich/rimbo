import { useState } from 'react'

import styles from './Checkbox.module.scss'

import { ReactComponent as CheckmarkIcon } from 'assets/icons/checkbox-checkmark.svg'

interface CheckboxProps {
  name: string
  className?: string
}

export const Checkbox = ({ name, className }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={`${styles['checkbox-container']} ${className}`}>
      <label>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev)
          }}
        />

        {checked ? <CheckmarkIcon /> : null}
      </label>
    </div>
  )
}
