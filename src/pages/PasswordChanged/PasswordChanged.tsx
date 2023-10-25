import { HeaderAuth, Heading } from 'components'

import { ReactComponent as SalutIcon } from 'assets/img/salut.svg'

export const PasswordChangedPage = () => {
  return (
    <div className='guest-page'>
      <HeaderAuth />

      <div className='auth-content'>
        <div className='form-container'>
          <div className='icon'>
            <SalutIcon />
          </div>

          <Heading variant='h1'>Password has been changed</Heading>

          <p className='subtitle'>You can use it to login</p>

          <button className='button' style={{ width: 194, margin: '24px auto 0' }}>
            Log In
          </button>
        </div>
      </div>

      <div className='lightning' />
    </div>
  )
}
