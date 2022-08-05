import React from 'react'
//importy styles
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Resume from './components/resume'

export const App = () => {
  return (
    <>
    <Header/>
    <Resume/>
    <GlobalStyle />
    </>
  )
}
  