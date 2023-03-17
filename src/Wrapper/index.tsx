import { Routing } from '../Routing'
import AppContext from '../store/app-context'
import { useContext } from 'react'
import Modal from '../components/modal'
import Toast from '../components/toast'
import Background from '../components'

function Wrapper() {
  const AppCtx = useContext(AppContext)
  return (
    <>
      {AppCtx.isModalVisible && <Modal />}
      {AppCtx.isAlertVisible && <Toast type={'I'} />}
      <Background>
        <Routing />
      </Background>
    </>
  )
}

export default Wrapper
