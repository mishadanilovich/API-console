import React from 'react'
import { MoreVert } from '../../icons'
import { Dropdown } from '../../components'

import { Container, Indicator } from './styles'

import { Props } from './types'
import { DROPDOWN_ACTIONS } from '../../constants'

export const HistoryItem = ({ isError }: Props): JSX.Element => {
  return (
    <Container>
      <Indicator isError={isError} />
      track.get
      <MoreVert className="dropdown-icon" />
      <Dropdown className="dropdown-container" actions={DROPDOWN_ACTIONS} />
    </Container>
  )
}
