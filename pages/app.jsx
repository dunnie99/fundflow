import React from 'react'
import { AppHeadNav } from '../components/AppHeadNav'
import GlobalProvider from '../context/GlobalContext'

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <AppHeadNav />
      </GlobalProvider>
    </div>
  )
}

export default App