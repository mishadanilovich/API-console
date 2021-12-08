import React from 'react'
import styled from 'styled-components'
import { AuthHoc } from './hoc'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <AuthHoc>
        <p>Console</p>
      </AuthHoc>
    </AppContainer>
  )
}

export default App
