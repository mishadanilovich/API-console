import React, { useState } from 'react'
import { AuthPage } from '../../routes'
import { Props } from './types'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const [isAuth] = useState(false)
  return <>{!isAuth ? <AuthPage /> : children}</>
}
