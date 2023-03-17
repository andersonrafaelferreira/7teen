import { useState, useEffect } from 'react'
import styles from './toast.module.css'

const Toast = (props: any) => {
  const [typeToast, setTypeToast] = useState(props.type)

  let content: string = ''

  switch (typeToast) {
    case 'T_E':
      content = 'Envio de comprovativo submetido com sucesso!'

      break
    case 'I':
      content = 'A imprimir comprovativo...'

      break

    case 'I_F':
      content = 'Por favor retire o comprovativo, obrigado.'

      break
  }

    if (typeToast === "I") {
        setTimeout(() => {
            setTypeToast("I_F")
        }, 3000);
    }

  return (
    <div className={styles.main}>
      <p>{content}</p>
    </div>
  )
}

export default Toast
