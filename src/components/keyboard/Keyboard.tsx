import { useContext } from 'react'
import classes from './Keyboard.module.css'
import styles from '../container/container.module.css'
import Button from '../Button/Button'
import AppContext from '../../store/app-context'

function Keyboard(props: any) {
  const AppCtx = useContext(AppContext)

  function clickHandler(valorBtn: any) {
    AppCtx.onInsertAmount(valorBtn)
  }

  function deleteHandler() {
    AppCtx.onSliceAmount()
  }

  return (
    <div>
      {!AppCtx.isHidden && (
        <div className={styles['wrapper']}>
          <div>
            <div className="keyboard">
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('1')}
              >
                <span className={classes['letter-primary']}>1</span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('2')}
              >
                <span className={classes['letter-primary']}>2</span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('3')}
              >
                <span className={classes['letter-primary']}>3</span>
              </button>
            </div>
            <div className="keyboard">
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('4')}
              >
                <span className={classes['letter-primary']}>4</span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('5')}
              >
                <span className={classes['letter-primary']}>5</span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('6')}
              >
                <span className={classes['letter-primary']}>6</span>
              </button>
            </div>
            <div className="keyboard">
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('7')}
              >
                <span className={classes['letter-primary']}>7</span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('8')}
              >
                <span className={classes['letter-primary']}>8</span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('9')}
              >
                <span className={classes['letter-primary']}>9</span>
              </button>
            </div>
            <div className="keyboard">
              <button type="button" className={classes['simbolos']}>
                <span className={classes['teclado-icons']}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="20"
                    viewBox="0 0 63 20"
                  >
                    <path
                      fill="#BC431A"
                      d="M51.424 14.048h-2.51l.401-2.124h2.46l.729-4.246h-2.486l.352-2.123h2.485L53.66.778h2.108l-.803 4.777h3.49l.803-4.777h2.109l-.804 4.777h2.41l-.35 2.123H60.21l-.728 4.246h2.41l-.377 2.124H59.13l-.903 5.308h-2.11l.905-5.308h-3.49l-.904 5.308H50.52l.904-5.308zm5.95-2.124l.728-4.246h-3.49l-.728 4.246h3.49zM7.498 11.4H.377V8.796h7.121V1.145h2.695v7.65h7.121V11.4h-7.121v7.65H7.498V11.4zm19.992 6.39l3.428-6.342H24.01V8.731h6.91l-3.43-6.398 2.143-1.302 3.481 6.398 3.428-6.398 2.196 1.302-3.482 6.398h6.963v2.717h-6.91l3.429 6.342-2.196 1.359-3.428-6.398-3.481 6.398-2.143-1.36z"
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className={classes['container']}
                onClick={() => clickHandler('0')}
              >
                <span className={classes['letter-primary']}>0</span>
              </button>
              <button type="button" className={classes['simbolos']}>
                <span className={classes['letter-primary']}>.</span>
              </button>
            </div>
          </div>
          <div>
            <Button
              deleteHandler={() => deleteHandler()}
              hideHandler={() => props.hideHandler()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Keyboard
