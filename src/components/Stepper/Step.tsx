import { Fragment } from 'react'
import checkmark from '../../assets/icon-check.svg'
import classes from './Step.module.css'

const Step = (props: any) => {
  return (
    <Fragment>
      <div
        className={`${classes['container']} ${
          props.step === 0 ? '' : props.step === 1 && classes['selected']
        }`}
      >
        <div
          className={`${
            props.step !== 2
              ? classes['numbercontainer']
              : classes.checkmarkcontainer
          } ${props.step == 1 && classes['selected']}`}
        >
          {/* <span className={classes.number}>1</span> */}
          {props.step === 2 ? (
            <img src={checkmark} />
          ) : (
            <span className={classes.number}>{props.id}</span>
          )}
        </div>
        <div
          className={`${classes['label']} ${
            props.step === 1
              ? classes['selected']
              : props.step === 2 && classes['done']
          }`}
        >
          {props.name}
        </div>
      </div>
    </Fragment>
  )
}
export default Step
