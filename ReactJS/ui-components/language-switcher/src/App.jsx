import React from 'react'
import Blog from './component/Blog'
import LanguageContextProvider from './context/LanguageContextProvider'
const App = () => {
  return (
   <LanguageContextProvider>
    <Blog/>
    </LanguageContextProvider>
  )
}

export default App