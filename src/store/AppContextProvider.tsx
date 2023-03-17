import { useReducer, useState } from 'react'
import AppContext from './app-context'

const defaultBankNotesState = {
  note500: 0,
  note1000: 0,
  note2000: 0,
  note5000: 0,
}

const bankNotesReducer = (state: any, action: any) => {
  if (action.type === 'INSERT_500') {
    let previousNote = state.note500
    const updatedNote = (previousNote += 1)
    return { ...state, note500: updatedNote }
  }
  if (action.type === 'INSERT_1000') {
    let previousNote = state.note1000
    const updatedNote = (previousNote += 1)
    return { ...state, note1000: updatedNote }
  }
  if (action.type === 'INSERT_2000') {
    let previousNote = state.note2000
    const updatedNote = (previousNote += 1)
    return { ...state, note2000: updatedNote }
  }
  if (action.type === 'INSERT_5000') {
    let previousNote = state.note5000
    const updatedNote = (previousNote += 1)
    return { ...state, note5000: updatedNote }
  }
  return defaultBankNotesState
}

const AppContextProvider = (props: any) => {
  const [bankNotesState, dispatchBankNotes] = useReducer(
    bankNotesReducer,
    defaultBankNotesState
  )
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showBalance, setShowBalance] = useState(false)
  const [Stepper, setStepper] = useState({
    stepConta: 1,
    stepMontante: 0,
    stepDeposito: 0,
    stepConclusao: 0,
  })
  const [hide, setHide] = useState(true)

  const [isAlertVisible, setAlertIsVisible] = useState(false)
  const [isModalVisible, setModalIsVisible] = useState(false)

  const accounts = [
    { id: '82h3da7e', saldo: 3 },
    { id: '213s2', saldo: 4 },
    { id: 'asda1', saldo: 33 },
    { id: '1223dd', saldo: 31 },
    { id: '1233dad', saldo: 31 },
    { id: '1234dd', saldo: 31 },
  ]

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }
  const BalanceHandler = () => {
    setShowBalance(!showBalance)
  }
  const StepThrough = () => {
    if (Stepper.stepConta < 2) {
      setStepper((prevState) => {
        return { ...prevState, stepConta: Stepper.stepConta + 1 }
      })

      if (Stepper.stepConta + 1 === 2) {
        setStepper((prevState) => {
          return {
            ...prevState,
            stepConta: Stepper.stepConta + 1,
            stepMontante: Stepper.stepMontante + 1,
          }
        })
      }
    }

    if (Stepper.stepMontante < 2 && Stepper.stepConta === 2) {
      setStepper((prevState) => {
        return { ...prevState, stepMontante: Stepper.stepMontante + 1 }
      })

      if (Stepper.stepMontante + 1 === 2) {
        setStepper((prevState) => {
          return {
            ...prevState,
            stepMontante: Stepper.stepMontante + 1,
            stepDeposito: Stepper.stepDeposito + 1,
          }
        })
      }
    }

    if (Stepper.stepDeposito < 2 && Stepper.stepMontante === 2) {
      setStepper((prevState) => {
        return { ...prevState, stepDeposito: Stepper.stepDeposito + 1 }
      })

      if (Stepper.stepDeposito + 1 === 2) {
        setStepper((prevState) => {
          return {
            ...prevState,
            stepDeposito: Stepper.stepDeposito + 1,
            stepConclusao: Stepper.stepConclusao + 1,
          }
        })
      }
    }
    if (Stepper.stepConclusao < 2 && Stepper.stepDeposito === 2) {
      setStepper((prevState) => {
        return { ...prevState, stepConclusao: Stepper.stepConclusao + 1 }
      })
    }
  }

  const StepBack = () => {
    if (
      Stepper.stepConclusao !== 0 &&
      Stepper.stepDeposito === 2 &&
      Stepper.stepMontante === 2 &&
      Stepper.stepConta === 2
    ) {
      setStepper((prevState) => {
        return { ...prevState, stepConclusao: Stepper.stepConclusao - 1 }
      })

      if (Stepper.stepConclusao - 1 === 0) {
        setStepper((prevState) => {
          return {
            ...prevState,
            stepConclusao: Stepper.stepConclusao - 1,
            stepDeposito: Stepper.stepDeposito - 1,
          }
        })
      }
    }

    if (
      Stepper.stepConclusao === 0 &&
      Stepper.stepDeposito !== 0 &&
      Stepper.stepMontante === 2 &&
      Stepper.stepConta === 2
    ) {
      setStepper((prevState) => {
        return { ...prevState, stepDeposito: Stepper.stepDeposito - 1 }
      })

      if (Stepper.stepDeposito - 1 === 0) {
        setStepper((prevState) => {
          return {
            ...prevState,
            stepDeposito: Stepper.stepDeposito - 1,
            stepMontante: Stepper.stepMontante - 1,
          }
        })
      }
    }

    if (
      Stepper.stepConclusao === 0 &&
      Stepper.stepDeposito === 0 &&
      Stepper.stepMontante !== 0 &&
      Stepper.stepConta === 2
    ) {
      setStepper((prevState) => {
        return { ...prevState, stepMontante: Stepper.stepMontante - 1 }
      })

      if (Stepper.stepMontante - 1 === 0) {
        setStepper((prevState) => {
          return {
            ...prevState,
            stepMontante: Stepper.stepMontante - 1,
            stepConta: Stepper.stepConta - 1,
          }
        })
      }
    }

    if (
      Stepper.stepConclusao === 0 &&
      Stepper.stepDeposito === 0 &&
      Stepper.stepMontante === 0 &&
      Stepper.stepConta !== 0
    ) {
      setStepper((prevState) => {
        return { ...prevState, stepConta: Stepper.stepConta - 1 }
      })
    }
  }

  const [insertedAmount, setInsertedAmount] = useState(0)
  const [currentAmount, setCurrentAmount] = useState(insertedAmount)

  const insert500Handler = () => {
    setCurrentAmount(currentAmount - 500)
    dispatchBankNotes({ type: 'INSERT_500' })
  }

  const insert1000Handler = () => {
    setCurrentAmount(currentAmount - 1000)
    dispatchBankNotes({ type: 'INSERT_1000' })
  }

  const insert2000Handler = () => {
    setCurrentAmount(currentAmount - 2000)
    dispatchBankNotes({ type: 'INSERT_2000' })
  }

  const insert5000Handler = () => {
    setCurrentAmount(currentAmount - 5000)
    dispatchBankNotes({ type: 'INSERT_5000' })
  }

  const onHideHandler = () => {
    setHide(true)
  }
  const onShowHandler = () => {
    setHide(false)
  }

  const onInsertAmountHandler = (BtnValue: any) => {
    if (insertedAmount === 0 && insertedAmount.toString().length === 1) {
      setInsertedAmount(BtnValue)
    } else {
      setInsertedAmount(insertedAmount + BtnValue)
      setCurrentAmount(insertedAmount+BtnValue)
    }
  }
  const onDeleteAmountHandler = () => {
    setInsertedAmount(0)
  }
  const onSliceAmountHandler = () => {
    if (insertedAmount.toString().length === 1) {
      setInsertedAmount(0)
    } else {
      const updatedAmount = insertedAmount.toString().slice(0, -1)
      const abcd = parseInt(updatedAmount)
      setInsertedAmount(abcd)
    }
  }

  let modalType = 'E'

  const modalTHandler = () => {
    console.log('MODAL AQUI')
    modalType = 'T'
    if (isModalVisible) {
      setModalIsVisible(false)
    } else {
      setModalIsVisible(true)
    }
  }

  const modalEHandler = () => {
    console.log('MODAL AQUI')
    modalType = 'E'
    if (isModalVisible) {
      setModalIsVisible(false)
    } else {
      setModalIsVisible(true)
    }
  }

  const printHandler = () => {
    console.log('AQUI')
    setAlertIsVisible(true)
    
    setTimeout(() => {
      setAlertIsVisible(false)
    }, 6000)
  }


  const appContext = {
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,

    showBalance: showBalance,
    onShowBalance: BalanceHandler,

    Steps: Stepper,

    amountInserted: insertedAmount,
    onDeleteAmount: onDeleteAmountHandler,
    onInsertAmount: onInsertAmountHandler,
    onSliceAmount: onSliceAmountHandler,
    currentAmount: currentAmount,

    user: [
      {
        id: 1,
        username: 'Daniela',
        accounts: accounts,
      },
    ],
    onStepForward: StepThrough,
    onStepBackward: StepBack,
    isHidden: hide,
    onShow: onShowHandler,
    onHide: onHideHandler,
    bankNotes: bankNotesState,
    onInsert500: insert500Handler,
    onInsert1000: insert1000Handler,
    onInsert2000: insert2000Handler,
    onInsert5000: insert5000Handler,
    printHandler: printHandler,
    modalTHandler: modalTHandler,
    modalEHandler: modalEHandler,
    isModalVisible: isModalVisible,
    isAlertVisible: isAlertVisible,
    modalType: modalType
  }

  
  

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
