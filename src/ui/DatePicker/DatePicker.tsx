import { useState, forwardRef } from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { useTheme } from 'hooks/useTheme'
import { Theme } from 'providers/Theme/Context'

import styles from './DatePicker.module.scss'

import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg'

interface CustomInputProps {
  value?: string | null
  onClick?: () => void
}

const CustomInput = forwardRef<null, CustomInputProps>(({ value, onClick }, ref) => (
  <button className={styles['datepicker-button']} onClick={onClick} ref={ref}>
    <CalendarIcon />
    <span>{value}</span>
  </button>
))

export const DatePicker = (props: Partial<ReactDatePickerProps>) => {
  const { theme } = useTheme()
  const [isOpen, setOpen] = useState(false)
  const [date, setDate] = useState<Date | null>(new Date())

  return (
    <div className={styles.datepicker}>
      <ReactDatePicker
        {...props}
        open={isOpen}
        dateFormat='dd-MM-yyyy'
        selected={date}
        popperClassName={theme === Theme.DARK ? 'dark' : ''}
        shouldCloseOnSelect={false}
        onChange={setDate}
        onFocus={() => {
          setOpen(true)
        }}
        onInputClick={() => {
          setOpen(!isOpen)
        }}
        onBlur={() => {
          setOpen(false)
        }}
        customInput={<CustomInput />}
        calendarContainer={({ children }) => {
          const year = date?.getFullYear()
          const dayOfWeek = date?.toDateString().substring(0, 3)
          const monthAndDateNumber = date?.toDateString().substring(4, 10)

          return (
            <>
              <div className={styles['top-line']}>
                <span>{year}</span>
                <span>
                  {dayOfWeek}, {monthAndDateNumber}
                </span>
              </div>

              {children}

              <div className={styles['bottom-line']}>
                <button
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  OK
                </button>
              </div>
            </>
          )
        }}
      />
    </div>
  )
}
