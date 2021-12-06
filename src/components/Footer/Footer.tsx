import React from 'react'
import { Button, GitHubLink } from '../../components'

import { FooterContainer } from './styles'
import { SUBMIT_CONSOLE } from '../../constants'
import { Format } from '../Format'

export const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <Button type="submit" className="button">
        {SUBMIT_CONSOLE}
      </Button>
      <GitHubLink />
      <Format />
    </FooterContainer>
  )
}
