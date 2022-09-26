import Header from "./components/Header";
import { ClimaProvider } from "./context/ClimaProvider";
import React from "react";
import OthersCitys from "./components/OthersCitys";
import Error from "./components/Error";
import useClima from "./Hooks/useClima";

const App = () => {
  const { guardarCiudad } = useClima();
  return (
    <ClimaProvider>
      <Header />
      <Error />
      <OthersCitys />
    </ClimaProvider>
  );
};
export default App;
