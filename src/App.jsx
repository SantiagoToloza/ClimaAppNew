import Header from "./components/Header";
import { ClimaProvider } from "./context/ClimaProvider";
import React from "react";
import OthersCitys from "./components/OthersCitys";
import Error from "./components/Error";
import useClima from "./Hooks/useClima";
const { guardarCiudad } = useClima();

const App = () => {
  return (
    <ClimaProvider>
      <Header />
      <Error />
      {guardarCiudad.name && <OthersCitys />}
    </ClimaProvider>
  );
};
export default App;
