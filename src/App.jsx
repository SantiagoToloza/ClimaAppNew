import Header from "./components/Header"
import { ClimaProvider } from "./context/ClimaProvider"
import React from 'react';



const App = () => {
  return (
    <ClimaProvider>
      <Header/>
    </ClimaProvider>
  )
}
export default App