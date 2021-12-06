import React from 'react'
import { AuthForm } from '../../components/AuthForm'
import { StyledLink } from '../../components/Link'
import { Logo } from '../../icons'

import { Container } from './styles'
import { GITHUB_LINK } from '../../constants'

export const AuthPage = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <AuthForm />
      <StyledLink href="https://github.com/mishadanilovich">
        {GITHUB_LINK}
      </StyledLink>
    </Container>
  )
}
