import axios from 'axios'
import { createContext, useState } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
  });

  const [resultado, setResultado] = useState({})


  const { ciudad, pais } = busqueda;


  const realizarBusqueda = async (e) => {
    const apiKey = import.meta.env.VITE_api_key;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    console.log(url);
    try {
      const { data } = await axios.get(url);
      setResultado(data)

      
    } catch (error) {
      console.log(error);
    }
  };

 

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        realizarBusqueda,
        resultado
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
