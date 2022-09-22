import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ClimaContext = createContext();
const apiKey = import.meta.env.VITE_api_key;

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado, setResultado] = useState({});
  const { ciudad, pais } = busqueda;

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState();
  const [status, setStatus] = useState(null);
  const [location, setLocation] = useState(false);
  const [guardarCiudad, setGuardarCiudad] = useState([]);
  console.log(lat);

  const buscarLocalidad = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
    if (lat != null) {
      realizarBusqueda();
    }
  };

  const realizarBusqueda = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    console.log(url);
    try {
      const { data } = await axios.get(url);
      setResultado(data);
      if(guardarCiudad.name.includes(data.name)){
        console.log('esta duplicado')
      }
      setGuardarCiudad([...guardarCiudad, data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const busquedaManual = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    const { data } = await axios(url);

    setResultado(data);
    setGuardarCiudad([...guardarCiudad, data]);
    console.log(data);
  };

  const datosBusqueda = (e) => {
    e.preventDefault();
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
        resultado,
        guardarCiudad,
        busqueda,
        datosBusqueda,
        busquedaManual,
        buscarLocalidad,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
