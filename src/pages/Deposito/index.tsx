import { useState, useContext } from 'react'
import Nota from '../../components/Nota'
import classes from './styles.module.css'
import AppContext from '../../store/app-context'
import Header from '../../components/header'
import Stepper from '../../components/Stepper/Stepper'
import Footer from '../../components/footer'

const Deposito = () => {
  const AppCtx = useContext(AppContext)

  return (
    <>
      <Header />
        <Stepper />
        <div className={classes['deposito-conteudo']}>
          <p className={classes['deposito-titulo']}>
            Por favor introduza na máquina as notas para depósito.
          </p>
          <p className={classes['deposito-subtitulo1']}>Valor a depositar:</p>
          <p className={classes['deposito-moeda']}>
            Kz{' '}
            <span className={classes['deposito-valor']}>
              {AppCtx.amountInserted
/*                 .toFixed(2)
                .toString()
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.') */}
            </span>
          </p>
          <p className={classes['deposito-subtitulo2']}>Valor em falta:</p>
          <p className={classes['deposito-moeda']}>
            Kz{' '}
            <span className={classes['deposito-valor']}>
              {AppCtx.currentAmount
/*                 .toFixed(2)
                .toString()
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.') */}
            </span>
          </p>
          <div className={classes['deposito-notas']}>
            <Nota notaTipo={1} />
            <Nota notaTipo={2} />
            <Nota notaTipo={3} />
            <Nota notaTipo={4} />
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Deposito
