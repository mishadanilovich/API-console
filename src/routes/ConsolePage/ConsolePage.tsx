import React from 'react'
import { Header, Footer, TrackHistory } from '../../components'

import { Container } from './styles'

export const ConsolePage = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <TrackHistory />
      <Footer />
    </Container>
  )
}
