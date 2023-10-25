import { createBrowserRouter } from 'react-router-dom'

import {
  OverviewPage,
  CompaniesSettingsPage,
  LogInPage,
  SignUpPage,
  PasswordRecoveryPage,
  CheckEmailPage,
  PasswordChangedPage,
  PasswordRecoveryInfoSentPage
} from 'pages'

export type Keys = keyof typeof ROUTE_NAMES
export type RouteNamesValues = (typeof ROUTE_NAMES)[Keys]

export const ROUTE_NAMES = {
  OVERVIEW: '/overview',
  COMPANIES_SETTINGS: '/companies-settings',
  SIGN_UP: '/sign-up',
  LOG_IN: '/log-in',
  PASSWORD_RECOVERY: '/password-recovery',
  PASSWORD_RECOVERY_INFO_SENT: '/password-recovery-info-sent',
  CHECK_EMAIL: '/check-email',
  PASSWORD_CHANGED: '/password-changed'
} as const

export const router = createBrowserRouter([
  {
    path: ROUTE_NAMES.OVERVIEW,
    element: <OverviewPage />
  },
  {
    path: ROUTE_NAMES.COMPANIES_SETTINGS,
    element: <CompaniesSettingsPage />
  },
  {
    path: ROUTE_NAMES.LOG_IN,
    element: <LogInPage />
  },
  {
    path: ROUTE_NAMES.SIGN_UP,
    element: <SignUpPage />
  },
  {
    path: ROUTE_NAMES.PASSWORD_RECOVERY,
    element: <PasswordRecoveryPage />
  },
  {
    path: ROUTE_NAMES.CHECK_EMAIL,
    element: <CheckEmailPage />
  },
  {
    path: ROUTE_NAMES.PASSWORD_CHANGED,
    element: <PasswordChangedPage />
  },
  {
    path: ROUTE_NAMES.PASSWORD_RECOVERY_INFO_SENT,
    element: <PasswordRecoveryInfoSentPage />
  }
])
