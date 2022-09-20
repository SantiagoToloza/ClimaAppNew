import Header from "./components/Header"
import { ClimaProvider } from "./context/ClimaProvider"
import React from 'react';
import WeekClimate from "./components/WeekClimate";



const App = () => {
  return (
    <ClimaProvider>
      <Header/>
      <WeekClimate/>
    </ClimaProvider>
  )
}
export default App