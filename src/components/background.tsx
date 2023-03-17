import styles from './background.module.css'

const Background = (props:any) => {
  return (
    <div className={styles['bg_img']}>
      <div className={styles['bg_glass']}>{props.children}</div>
    </div>
  )
}

export default Background
