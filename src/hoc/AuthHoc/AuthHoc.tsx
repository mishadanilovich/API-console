import React, { createContext, useMemo, useState } from 'react'
import { AuthPage } from '../../routes'
import { AuthProps, Props } from './types'

export const AuthContext = createContext<AuthProps>({
  isAuth: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsAuth: () => {},
})

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false)
  const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth])

  return (
    <>
      <AuthContext.Provider value={value}>
        {!isAuth ? <AuthPage /> : children}
      </AuthContext.Provider>
    </>
  )
}
