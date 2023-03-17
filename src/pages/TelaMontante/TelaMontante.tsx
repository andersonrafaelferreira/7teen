import { useState, useContext } from 'react'

import Container from '../../components/container/Container'
import Montante from '../../components/montante/Montante'
import Footer from '../../components/footer'

import classes from './TelaMontante.module.css'
import Header from '../../components/header'
import Stepper from '../../components/Stepper/Stepper'
import AppContext from '../../store/app-context'

function TelaMontante() {
  const AppCtx = useContext(AppContext)
  const [amount, setAmount] = useState('')

  function eraseHandler() {
    setAmount('')
  }

  return (
    <div>
      <Header/>
      <Stepper/>
      <main>
        <Montante
          amount={amount}
          hideHandler={AppCtx.onHide}
          eraseHandler={eraseHandler}
        />
      </main>
      <Footer amount={amount}
          setAmount={setAmount}
          hideHandler={AppCtx.onHide}
          eraseHandler={eraseHandler}
          hide={AppCtx.isHidden}/>
    </div>
    
  )
}

export default TelaMontante
