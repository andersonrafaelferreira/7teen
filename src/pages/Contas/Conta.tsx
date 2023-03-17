import classes from './Conta.module.css'
import circle from '../../assets/acc_not.svg'
import check from '../../assets/button-icon-selected-card.svg'
import { useContext } from 'react'
import AppContext from '../../store/app-context'

const Account = (props: any) => {
  const AppCtx = useContext(AppContext)
  const onSelectHandler = () => {
    props.onSelect(props.id)
  }
  return (
    <div
      onClick={onSelectHandler}
      className={`${classes['containerGlass']} ${
        props.focus === props.id ? classes['selected'] : ''
      }`}
    >
      <div
        className={`${classes['LabelAcc']} ${
          props.focus === props.id ? classes['selected'] : ''
        }`}
      >
        <label>Nº de Conta:</label>
        <img src={props.focus === props.id ? check : circle} />
        <span>{props.id}</span>
        {AppCtx.showBalance && (
          <p>
            Saldo: <span>{props.saldo} Kz</span>
          </p>
        )}
      </div>
    </div>
  )
}
export default Account
