import React from 'react'
import './container.css'

const Container = ({ children }) => (
  <div className="main-container">
    <div className="content">{children}</div>
  </div>
)

export default Container
