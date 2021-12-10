import React from 'react'
import { MoreVert } from '../../icons'

import {
  ConsoleContainer,
  ConsoleTextarea,
  ConsoleTextareaContainer,
  ConsoleTextareaTitle,
} from './styles'

import { CONSOLE_QUERY_TITLE, CONSOLE_RESPONSE_TITLE } from '../../constants'

export const Console = (): JSX.Element => {
  return (
    <ConsoleContainer>
      <ConsoleTextareaContainer>
        <ConsoleTextareaTitle>{CONSOLE_QUERY_TITLE}</ConsoleTextareaTitle>
        <ConsoleTextarea />
      </ConsoleTextareaContainer>
      <MoreVert />
      <ConsoleTextareaContainer>
        <ConsoleTextareaTitle>{CONSOLE_RESPONSE_TITLE}</ConsoleTextareaTitle>
        <ConsoleTextarea />
      </ConsoleTextareaContainer>
    </ConsoleContainer>
  )
}
