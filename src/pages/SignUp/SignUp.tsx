import { Link } from 'react-router-dom'

import { HeaderAuth, Heading } from 'components'
import { TextField } from 'ui'

import { ROUTE_NAMES } from 'core/router'

import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg'

export const SignUpPage = () => {
  return (
    <div className='guest-page'>
      <HeaderAuth />

      <div className='auth-content'>
        <div className='form-container'>
          <Heading variant='h1'>Get started with RIMBO today!</Heading>

          <form className='form'>
            <TextField type='email' name='email' placeholder='Email' />

            <TextField type='password' name='password' placeholder='Password' endAdornment={<EyeIcon />} />
            <TextField type='password' name='password' placeholder='Password' />

            <button type='button' className='button'>
              Sign Up
            </button>
          </form>

          <div className='form-bottom'>
            <span>Already registered?</span>
            <Link to={ROUTE_NAMES.LOG_IN}>Log In</Link>
          </div>
        </div>
      </div>

      <div className='lightning' />
    </div>
  )
}
