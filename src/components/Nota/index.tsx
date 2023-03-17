import { useContext } from 'react'
import AppContext from '../../store/app-context'
import classes from './style.module.css'
import nota500 from '../../assets/nota-500.svg'
import nota1000 from '../../assets/nota-1000.svg'
import nota2000 from '../../assets/nota-2000.svg'
import nota5000 from '../../assets/nota-5000.svg'
import placeholderNota500 from '../../assets/placeholder-nota-500.svg'
import placeholderNota1000 from '../../assets/placeholder-nota-1000.svg'
import placeholderNota2000 from '../../assets/placeholder-nota-2000.svg'
import placeholderNota5000 from '../../assets/placeholder-nota-5000.svg'

const Nota = (props: any) => {
  const AppCtx = useContext(AppContext)

  let notaImgPlaceHolder
  let notaImg
  let notaValor: number
  let notaCount: number = 0

  switch (props.notaTipo) {
    case 1:
      notaImg = nota500
      notaImgPlaceHolder = placeholderNota500
      notaValor = 500
      notaCount = AppCtx.bankNotes.note500
      break
    case 2:
      notaImg = nota1000
      notaImgPlaceHolder = placeholderNota1000
      notaValor = 1000
      notaCount = AppCtx.bankNotes.note1000
      break
    case 3:
      notaImg = nota2000
      notaImgPlaceHolder = placeholderNota2000
      notaValor = 2000
      notaCount = AppCtx.bankNotes.note2000
      break
    case 4:
      notaImg = nota5000
      notaImgPlaceHolder = placeholderNota5000
      notaValor = 5000
      notaCount = AppCtx.bankNotes.note5000
      break
  }

  const notaClickHandler = () => {
    if (notaValor <= AppCtx.currentAmount) {
      switch (notaValor) {
        case 500:
          AppCtx.onInsert500()
          break
        case 1000:
          AppCtx.onInsert1000()
          break
        case 2000:
          AppCtx.onInsert2000()
          break
        case 5000:
          AppCtx.onInsert5000()
          break
      }
    }
  }
  return (
    <div className={classes.nota}>
      {notaCount === 0 ? (
        <div className={classes.nota} onClick={notaClickHandler}>
          <img src={notaImgPlaceHolder} />{' '}
        </div>
      ) : (
        <div className={classes.nota} onClick={notaClickHandler}>
          <img src={notaImg} />{' '}
        </div>
      )}
      <p className={classes['nota-counter']}>{notaCount}</p>
    </div>
  )
}

export default Nota
