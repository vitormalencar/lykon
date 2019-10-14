import React from 'react'

import Header from '../Header/Header'
import Container from '../Container/Container'
import Navigation from '../Navigation/Navigation'

const AppTemplate = ({ children }) =>
  <div>
    <Header />
    <Container>
      {children}
    </Container>
    <Navigation/>
  </div>

export default AppTemplate
