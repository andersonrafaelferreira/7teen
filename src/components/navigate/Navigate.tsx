import { useState, useContext, useEffect } from 'react'
import styles from './navigate.module.css'
import AppContext from '../../store/app-context'
import { useNavigate } from 'react-router-dom'

function Navigate(props: any) {
  const AppCtx = useContext(AppContext)

  const navigate = useNavigate()

  function backStep() {
    AppCtx.onStepBackward()
    navigate(-1)
  }

  function nextStep() {
    AppCtx.onStepForward()
    AppCtx.onHide()
    const passo = AppCtx.Steps.stepConta
    if (passo + 1 == 2) {
      navigate('/montante')
    }

    const montante = AppCtx.Steps.stepMontante
    if (montante + 1 == 2) {
      navigate('/deposito')
    }

    const deposito = AppCtx.Steps.stepDeposito
    if (deposito + 1 == 2) {
      navigate('/conclusao')
    }
  }

  const Retroceder = () => (
    <button type="button" className={styles.retroceder} onClick={backStep}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="23"
        viewBox="0 0 13 23"
      >
        <path
          fill="#FFDBD1"
          fillRule="evenodd"
          d="M.55 12.932l8.196 9.003c.386.453.95.74 1.564.794a2.371 2.371 0 001.694-.506c.468-.378.754-.918.792-1.497a2.07 2.07 0 00-.592-1.578l-6.93-7.61 6.93-7.61a2.07 2.07 0 00.591-1.577 2.1 2.1 0 00-.791-1.497A2.372 2.372 0 0010.31.348a2.32 2.32 0 00-1.564.793L.55 10.145a2.062 2.062 0 00-.54 1.594c.045.44.234.857.54 1.193z"
        ></path>
      </svg>
      <span className={styles.letraRetroceder}>Retroceder</span>
    </button>
  )

  const [validacao, setValidacao] = useState(false)
  // function valido() {
  //   return AppCtx.amountInserted % 500 === 0
  // }

  useEffect(() => {


    function ValidaStep() {
      const conta = AppCtx.Steps.stepConta
      if (conta === 1 && props.focus !== '') {
        setValidacao(true)
      }

      

      const montante = AppCtx.Steps.stepMontante
      if (
        montante === 1 &&
        AppCtx.amountInserted !== 0
        
      ) {
        setValidacao(true)
      }
    }
    ValidaStep()
  }, [props.focus, AppCtx.amountInserted])

  const Avancar = () => (
    <button
      type="button"
      className={styles.avancar}
      onClick={nextStep}
      disabled={!validacao}
    >
      <span className={styles.letraAvancar}>
        Avançar
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="23"
        viewBox="0 0 13 23"
      >
        <path
          fill="#BC431A"
          fillRule="evenodd"
          d="M12.45 10.145L4.254 1.14A2.32 2.32 0 002.69.348 2.371 2.371 0 00.996.854 2.102 2.102 0 00.204 2.35a2.07 2.07 0 00.592 1.577l6.93 7.61-6.93 7.61a2.07 2.07 0 00-.591 1.578 2.1 2.1 0 00.791 1.497c.469.378 1.08.56 1.694.506a2.32 2.32 0 001.564-.794l8.196-9.003c.402-.44.597-1.016.54-1.595a2.084 2.084 0 00-.54-1.192z"
        ></path>
      </svg>
    </button>
  )

  return (
    <div className={styles.wrapper}>
      <Retroceder />
      <Avancar />
    </div>
  )
}

export default Navigate
