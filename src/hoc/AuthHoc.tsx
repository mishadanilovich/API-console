import React, { useState } from 'react'
import { AuthPage } from '../routes'

interface Props {
  children: JSX.Element
}

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const [isAuth] = useState(false)
  return <>{!isAuth ? <AuthPage /> : children}</>
}
