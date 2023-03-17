import { useState, useContext } from 'react'
import Container from '../container/Container'

import classes from './footer.module.css'
import AppContext from '../../store/app-context'

const Footer = (props:any) => {
  const AppCtx = useContext(AppContext)

  return (
    
      <footer className={AppCtx.isHidden ? classes['bg_glass_hide'] : classes['bg_glass']}>
        <Container
          hideHandler={props.hideHandler}
          hide={props.hide}
          amount={props.amount}
          setAmount={props.setAmount}
          focus={props.focus}

        />
      </footer>

  )
}

export default Footer