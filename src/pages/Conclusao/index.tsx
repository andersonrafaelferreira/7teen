import classes from './styles.module.css'
import checkSucesso from '../../assets/checkSucesso.svg'
import iconEmail from '../../assets/icon-email.svg'
import iconImprimir from '../../assets/icon-imprimir.svg'
import iconTelefone from '../../assets/icon-telefone.svg'

import Header from '../../components/header'
import Stepper from '../../components/Stepper/Stepper'
import AppContext from '../../store/app-context'
import { useContext } from 'react'


const Conclusao = () => {
  const AppCtx = useContext(AppContext)

  const modalTHandler = () => {
    AppCtx.modalTHandler()
  }

  const modalEHandler = () => {
    AppCtx.modalEHandler()
  }

  const printHandler = () => {
    console.log('caiu no printhandler')
    AppCtx.printHandler()
  }
  return (
    <>
      <Header/>
      <Stepper/>
      <div className={classes['conclusao-conteudo']}>
        <img src={checkSucesso} className={classes['img-check']} />
        <p className={classes['conclusao-titulo']}>
          O seu depósito foi <br/>efectuado com sucesso!
        </p>
        <p className={classes['conclusao-subtitulo1']}>Conta destino:</p>
        <p className={classes['conclusao-conta']}>10056772-1</p>
        <p className={classes['conclusao-subtitulo2']}>Montante depositado:</p>
        <p className={classes['conclusao-moeda']}>
          Kz <span className={classes['conclusao-valor']}>85.500,00</span>
        </p>
        <p className={classes['conclusao-comprovativo-titulo']}>
          Selecione uma das seguintes opções para <br/>obter o seu comprovativo:
        </p>
        <div className={classes['conclusao-botoes']}>
          <button className={classes['conclusao-botao']} onClick={modalTHandler}>
            <img src={iconTelefone} className={classes['conclusao-botao-img']} />
            <span className={classes['conclusao-botao-texto']}>
              Enviar para Telemóvel
            </span>
          </button>
          <button className={classes['conclusao-botao']} onClick={modalEHandler}>
            <img src={iconEmail} className={classes['conclusao-botao-img']} />
            <span className={classes['conclusao-botao-texto']}>
              Enviar para Email
            </span>
          </button>
          <button className={classes['conclusao-botao']} onClick={printHandler}>
            <img src={iconImprimir} className={classes['conclusao-botao-img']} />
            <span className={classes['conclusao-botao-texto']}>Imprimir</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Conclusao
