import React from 'react'

const AppContext = React.createContext({
  isLoggedIn: true,
  onLogout: () => {},
  user: [
    {
      id: 1,
      username: 'Daniela',
      accounts: [{id:0,saldo:0}],
    },
  ],
  showBalance:false,
  onShowBalance:()=>{},
  Steps: { stepConta: 1, stepMontante: 0, stepDeposito: 0, stepConclusao: 0 },
  onStepForward: () => {},
  onStepBackward: () => {},
  isHidden: true,
  onShow:()=>{},
  onHide: () => {},
  amountInserted: 0,
  onInsertAmount: (event:any) => {},
  onDeleteAmount: () => {},
  onSliceAmount: ()=>{},
  currentAmount: 0,
  bankNotes: {},
  printHandler: () => {},
  modalTHandler: () => {},
  modalEHandler: () => {},
  isModalVisible: false,
  isAlertVisible: false,
  modalType: ''
})

export default AppContext
