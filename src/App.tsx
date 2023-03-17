import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './store/AppContextProvider'
import AppContext from './store/app-context'
import Wrapper from './Wrapper'
import './App.css'

function App() {
  const AppCtx = useContext(AppContext)

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Wrapper />
        </AppContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
