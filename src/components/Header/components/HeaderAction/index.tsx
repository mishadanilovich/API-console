import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DefaultScreen, FullScreen, Logout } from '../../../../icons'
import {
  HeaderContainer,
  LogoutButton,
  ScreenButton,
  Separator,
  UserInfo,
} from './styles'

import { LOGOUT } from '../../../../constants'
import { logout } from '../../../../redux/actions'

export const HeaderAction = (): JSX.Element => {
  const dispatch = useDispatch()

  const [widthWindow, setWidthWindow] = useState(window.screen.width)
  const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement)

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => window.removeEventListener('resize', handleWidth)
  }, [])

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

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <HeaderContainer>
      <UserInfo>
        some@email.com<Separator>:</Separator>sublogin
      </UserInfo>
      <LogoutButton onClick={handleLogout}>
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
