import { Link } from 'react-router-dom'

import { HeaderAuth, Heading } from 'components'
import { TextField } from 'ui'

import { ROUTE_NAMES } from 'core/router'

export const PasswordRecoveryPage = () => {
  return (
    <div className='guest-page'>
      <HeaderAuth />

      <div className='auth-content'>
        <div className='form-container'>
          <Heading variant='h1'>Password recovery</Heading>

          <p className='subtitle'>
            To change your password, please enter your email address. A link to the password change page will be sent to
            this address. For security reasons, it will be valid for 24 hours.{' '}
          </p>

          <form className='form'>
            <TextField type='email' name='email' placeholder='Email' />

            <button type='button' className='button'>
              Email me a recovery link
            </button>
          </form>

          <div className='form-bottom'>
            <span>Back to</span>
            <Link to={ROUTE_NAMES.LOG_IN}>Login</Link>
          </div>
        </div>
      </div>

      <div className='lightning' />
    </div>
  )
}
