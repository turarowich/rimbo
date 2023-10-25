import { HeaderAuth, Heading } from 'components'

export const PasswordRecoveryInfoSentPage = () => {
  return (
    <div className='guest-page'>
      <HeaderAuth />

      <div className='auth-content'>
        <div className='form-container'>
          <Heading variant='h1'>Password recovery info sent</Heading>

          <p className='subtitle'>
            We have sent instructions to reset your password to <span>your_email@gmail.com</span>
          </p>

          <button className='button' style={{ width: 194, margin: '24px auto 0' }}>
            Back to Login
          </button>

          <p className='subtitle' style={{ marginTop: 24 }}>
            Please let us know if you have any troubles with logging in. Support email: <span>support@rimbo.com</span>
          </p>
        </div>
      </div>

      <div className='lightning' />
    </div>
  )
}
