import { Link } from 'react-router-dom'

import { HeaderAuth, Heading } from 'components'

import { ROUTE_NAMES } from 'core/router'

import { ReactComponent as EmailIcon } from 'assets/img/email.svg'

export const CheckEmailPage = () => {
  return (
    <div className='guest-page'>
      <HeaderAuth />

      <div className='auth-content'>
        <div className='form-container'>
          <div className='icon'>
            <EmailIcon />
          </div>

          <Heading variant='h1'>Check your email</Heading>

          <p className='subtitle' style={{ maxWidth: 405 }}>
            We emailed you a confirmation link to <span>your_email@gmail.com</span> which you'll have to click to start
            using RIMBO
          </p>

          <Link to={ROUTE_NAMES.LOG_IN} style={{ marginTop: 24, textAlign: 'center' }}>
            Email Resent
          </Link>
        </div>
      </div>

      <div className='lightning' />
    </div>
  )
}
