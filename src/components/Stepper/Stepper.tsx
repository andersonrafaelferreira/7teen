import classes from './Stepper.module.css'
import { useContext } from 'react'
import Step from './Step'
import AppContext from '../../store/app-context'

const Stepper = (props: any) => {
  const AppCtx = useContext(AppContext)
  const stepConta=AppCtx.Steps.stepConta
  const stepMontante=AppCtx.Steps.stepMontante
  const stepDeposito=AppCtx.Steps.stepDeposito
  const stepConclusao=AppCtx.Steps.stepConclusao

  return (
    <div className={classes.stepper}>
      <Step step={stepConta} id="1" name="Conta" />
      <Step step={stepMontante} id="2" name="Montante" />
      <Step step={stepDeposito} id="3" name="Depósito" />
      <Step step={stepConclusao} id="4" name="Conclusão" />
    </div>
  )
}
export default Stepper
