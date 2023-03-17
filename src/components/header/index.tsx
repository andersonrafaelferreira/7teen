import { Fragment, useContext } from 'react'

import ArrowSvg from '../../assets/icons-navigation-back.svg'
import VerticalLineSvg from '../../assets/navigation-header-division-left.svg'
import HouseSvg from '../../assets/icons-navigation-homepage.svg'
import LogOutSvg from '../../assets/icons-navigation-logout.svg'
import HorizontalLineSvg from '../../assets/header-division.svg'

import styles from './header.module.css'

import Clock from './clock'
import AppContext from '../../store/app-context'

const Header = () => {
  const AppCtx = useContext(AppContext)
  const userName = AppCtx.user[0].username

  const logOutHandler = () => {
    AppCtx.onLogout()
    console.log(AppCtx.isLoggedIn)
  }

  return (
    <Fragment>
      <div className={styles['container-superior']}>
        <div className={styles.left}>
          <a href="#" className={styles.arrow}>
            <img src={ArrowSvg} alt=" back arrow" />
          </a>
          <img
            src={VerticalLineSvg}
            alt="vertical line"
            className={styles['vertical-line']}
          />
          <a href="#" className={styles.house}>
            <img src={HouseSvg} alt="house" />
          </a>
        </div>

        <div className={styles.middle}>
          <span>
            <Clock />
          </span>
        </div>
        <div className={styles.right}>
          <>
            <div className={styles.user}>
              <h4>Olá</h4>
              {AppCtx.isLoggedIn && <h3>{userName}</h3>}
            </div>
            <button onClick={logOutHandler}>
              <img src={LogOutSvg} alt="logout" />
            </button>
          </>
        </div>
      </div>

      <div className={styles['container-inferior']}>
        <p>Início / Depósitos</p>
        <p>Conta Própria</p>
      </div>

      <img src={HorizontalLineSvg} />
    </Fragment>
  )
}

export default Header
