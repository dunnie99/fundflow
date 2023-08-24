import React from 'react'
import { AppHeadNav } from '../components/AppHeadNav'
import GlobalProvider from '../context/GlobalContext'
import Swap from '../components/Swap'

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Swap />
      </GlobalProvider>
    </div>
  )
}

export default App