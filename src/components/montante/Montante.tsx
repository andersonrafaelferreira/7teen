import styles from './montante.module.css'
import AppContext from '../../store/app-context'
import { useContext } from 'react'

function Montante(props: any) {
  const AppCtx = useContext(AppContext)
  
  const AmountHandler = (event:any) => {
    AppCtx.onInsertAmount(event.target.value)
  }
  const deleteHandler = () => {
    AppCtx.onDeleteAmount()
  }

  return (
    <div className={styles['montante']}>
      <div className={styles['wrapper-pedido']}>
        <p className={styles['texto-guia']}>
          Por favor indique o montante que pretende depositar.
        </p>
      </div>
      <div className={styles['wrapper-montante']}>
        <p className={styles['texto-montante']}>Montante:</p>
      </div>
      <div className={styles['caixa-montante']}>
        <p>Kz</p>
        <input
          className={styles['caixa-valor']}
          min={500}
          max={50000000}
          value={AppCtx.amountInserted}
          onChange={AmountHandler}
          onFocus={AppCtx.onShow}
          /* onBlur={AppCtx.onHide} */
        />
        {props.amount && (
          <button
          className={styles['icon-cruz']}
          onClick={deleteHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              fill="#FFDBD1"
              fillRule="evenodd"
              d="M5.86 34.14a19.984 19.984 0 010-28.28 19.984 19.984 0 0128.28 0 19.984 19.984 0 010 28.28 19.984 19.984 0 01-28.28 0zm22.857-8.286L22.864 20l5.853-5.853a2.024 2.024 0 00.052-2.916 2.025 2.025 0 00-2.915.052L20 17.136l-5.853-5.853a2.024 2.024 0 00-2.915-.052 2.025 2.025 0 00.051 2.916L17.136 20l-5.853 5.853a2.024 2.024 0 00-.051 2.916 2.025 2.025 0 002.915-.052L20 22.864l5.854 5.853a2.024 2.024 0 002.915.052 2.025 2.025 0 00-.052-2.916v.001z"
            ></path>
          </svg>
        </button>
        )}
      </div>
      <div>
        <p className={styles['texto-montante-max']}>
          Montante máximo: Kz 50.000.000,00
        </p>
      </div>
    </div>
  )
}

export default Montante
