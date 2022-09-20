import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
  });
  
  const [resultado, setResultado] = useState({});
  const { ciudad, pais } = busqueda;

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState();
  const [status, setStatus] = useState(null);
  const [climaDias, setClimaDias] = useState([])
  console.log(lat);

  useEffect(() => {
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
      realizarDias();
    }
  }, [lat]);

  const realizarDias = async ()=>{
    const apiKey = import.meta.env.VITE_api_key;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}`
    console.log(url)
    try {
      const {data} = await axios.get(url);
      setClimaDias(data)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  const realizarBusqueda = async () => {
    const apiKey = import.meta.env.VITE_api_key;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    console.log(url);
    try {
      const { data } = await axios.get(url);
      setResultado(data);
      console.log(data)
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
        resultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
