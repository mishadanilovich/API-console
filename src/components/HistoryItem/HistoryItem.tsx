import React from 'react'
import { MoreVert } from '../../icons'

import { Container, Indicator } from './styles'

import { Props } from './types'

export const HistoryItem = ({ isError }: Props): JSX.Element => {
  return (
    <Container>
      <Indicator isError={isError} />
      track.get
      <MoreVert className="dropdown-icon" />
    </Container>
  )
}
