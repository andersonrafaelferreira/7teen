import { useState } from 'react'

import '../App.css'

import Container from '../components/container/Container'
import Montante from '../components/montante/Montante'

import classes from '../components/background.module.css'

function TelaMontante() {
  const [hide, setHide] = useState(true)
  const [amount, setAmount] = useState('')

  function hideHandler() {
    setHide(!hide)
  }

  function eraseHandler() {
    setAmount('')
  }

  return (
    <div className={classes['bg_img']}>
      <main>
        <Montante
          amount={amount}
          hideHandler={hideHandler}
          eraseHandler={eraseHandler}
        />
      </main>
      <footer className={hide ? classes['bg_glass_hide'] : classes['bg_glass']}>
        <Container
          hideHandler={hideHandler}
          hide={hide}
          amount={amount}
          setAmount={setAmount}
        />
      </footer>
    </div>
  )
}

export default TelaMontante
