import React, { useState } from 'react'
import { HeaderContainer, LogoutContainer, Separator, UserInfo } from './styles'
import { DefaultScreen, FullScreen, Logout } from '../../../../icons'
import { LOGOUT } from '../../../../constants'

export const HeaderAction = () => {
  const [isFullScreen] = useState(false)

  return (
    <HeaderContainer>
      <UserInfo>
        some@email.com<Separator>:</Separator>sublogin
      </UserInfo>
      <LogoutContainer>
        {LOGOUT}
        <Logout />
      </LogoutContainer>
      {isFullScreen ? <FullScreen /> : <DefaultScreen />}
    </HeaderContainer>
  )
}
