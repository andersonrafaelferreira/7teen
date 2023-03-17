import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Contas from '../pages/Contas/Contas'
import Main from '../components/Main'
import TelaMontante from '../pages/TelaMontante/TelaMontante'
import Deposito from '../pages/Deposito'
import Conclusao from '../pages/Conclusao'
import Modal from '../components/modal'
import Toast from '../components/toast'
import AppContext from '../store/app-context'

export function Routing() {
  const AppCtx = useContext(AppContext)

  return (
    <Routes>       
      <Route element={<Contas />} path="/" />
      <Route element={<Main />} path="/main" />
      <Route element={<p>carregou</p>} path="/sobre" />
      <Route element={<TelaMontante/>} path="/montante" />
      <Route element={<Deposito/>} path ="/deposito"/>
      <Route element={<Conclusao/>} path ="/conclusao"/>
    </Routes>
  )
}
