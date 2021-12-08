import React, { useState } from 'react'
import { DefaultScreen, FullScreen, Logout } from '../../../../icons'
import {
  HeaderContainer,
  LogoutButton,
  ScreenButton,
  Separator,
  UserInfo,
} from './styles'

import { LOGOUT } from '../../../../constants'

export const HeaderAction = (): JSX.Element => {
  const [isFullScreen] = useState(false)

  return (
    <HeaderContainer>
      <UserInfo>
        some@email.com<Separator>:</Separator>sublogin
      </UserInfo>
      <LogoutButton>
        {LOGOUT}
        <Logout />
      </LogoutButton>
      <ScreenButton>
        {isFullScreen ? (
          <DefaultScreen className="screen-icon" />
        ) : (
          <FullScreen className="screen-icon" />
        )}
      </ScreenButton>
    </HeaderContainer>
  )
}
