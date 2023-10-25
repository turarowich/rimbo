import { Link } from 'react-router-dom'

import { HeaderAuth, Heading } from 'components'
import { TextField } from 'ui'

import { ROUTE_NAMES } from 'core/router'

export const LogInPage = () => {
  return (
    <div className='guest-page'>
      <HeaderAuth />

      <div className='auth-content'>
        <div className='form-container'>
          <Heading variant='h1'>Log In</Heading>

          <form className='form'>
            <TextField type='email' name='email' placeholder='Email' />

            <TextField type='password' name='password' placeholder='Password' />

            <Link to={ROUTE_NAMES.PASSWORD_RECOVERY}>Forgot password?</Link>

            <button type='button' className='button'>
              Log In
            </button>
          </form>

          <div className='form-bottom column'>
            <span>Don’t have an account yet?</span>
            <Link to={ROUTE_NAMES.SIGN_UP}>Create an account</Link>
          </div>
        </div>
      </div>

      <div className='lightning' />
    </div>
  )
}
