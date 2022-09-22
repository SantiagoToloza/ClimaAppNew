import Header from "./components/Header"
import { ClimaProvider } from "./context/ClimaProvider"
import React from 'react';
import OthersCitys from "./components/OthersCitys";



const App = () => {
  return (
    <ClimaProvider>
      <Header/>
      <OthersCitys/>
    </ClimaProvider>
  )
}
export default App