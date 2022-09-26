import Header from "./components/Header";
import { ClimaProvider } from "./context/ClimaProvider";
import React from "react";
import OthersCitys from "./components/OthersCitys";
import Error from "./components/Error";

const App = () => {
  
  return (
    <ClimaProvider>
      <Header />
      <Error />
     <OthersCitys/>
    </ClimaProvider>
  );
};
export default App;
