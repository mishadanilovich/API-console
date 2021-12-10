import React, { useCallback, useEffect, useState } from 'react'
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
  const [widthWindow, setWidthWindow] = useState(window.screen.width)
  const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement)

  const handleScreen = () => {
    if (document.fullscreenElement === null) {
      setIsFullScreen(true)
      document.documentElement.requestFullscreen()
    } else if (document.fullscreenElement) {
      setIsFullScreen(false)
      document.exitFullscreen()
    }
  }

  const handleWidth = useCallback(() => {
    setWidthWindow(window.screen.width)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => window.removeEventListener('resize', handleWidth)
  }, [])

  return (
    <HeaderContainer>
      <UserInfo>
        some@email.com<Separator>:</Separator>sublogin
      </UserInfo>
      <LogoutButton>
        {widthWindow > 768 && `${LOGOUT}`}
        <Logout />
      </LogoutButton>
      {document.fullscreenEnabled && (
        <ScreenButton onClick={handleScreen}>
          {isFullScreen && <DefaultScreen className="screen-icon" />}
          {!isFullScreen && <FullScreen className="screen-icon" />}
        </ScreenButton>
      )}
    </HeaderContainer>
  )
}
