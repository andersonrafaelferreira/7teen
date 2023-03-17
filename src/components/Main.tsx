import React from 'react'
import Deposito from '../pages/Deposito'

import Background from './'
import Header from './header'
import Modal from './modal'
import Toast from './toast'


function Main() {
  const [isAlertVisible, setIsAlertVisible] = React.useState(false)
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const handleButtonClick = () => {
    setIsAlertVisible(true)

    setTimeout(() => {
      setIsAlertVisible(false)
    }, 6000)
  }

  const modalHandleButtonClick = () => {
    if (isModalVisible) {
      setIsModalVisible(false)
    }else{
      setIsModalVisible(true)
    }
  }

  return (
    <>
      {isModalVisible && <Modal onClose={modalHandleButtonClick}/>}
      <div className="App">
        {isAlertVisible && <Toast type={'I'} />}
        <Background>
          <Header />
          {/* <br />
          <button onClick={handleButtonClick}>toast</button>
          <button onClick={modalHandleButtonClick}>Modal</button> */}
          <Deposito></Deposito>
        </Background>
      </div>
    </>
  )
}

export default Main
