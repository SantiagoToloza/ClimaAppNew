import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [guardarCiudad, setGuardarCiudad] = useState(JSON.parse(localStorage.getItem("guardarCiudad") || '{"guardarCiudad": "[] "}' ));
  const [guardarId, setGuardarId] = useState(JSON.parse(localStorage.getItem("guardarId") || '{"guardarId": "[]"}' ));

  useEffect(() => {
    localStorage.setItem("guardarCiudad", JSON.stringify(guardarCiudad));
    localStorage.setItem("guardarId", JSON.stringify(guardarId));
  }, [guardarCiudad]);

 

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
      toast.success("Search completed");

      setGuardarId([...guardarId, data.id]);
      if (!guardarId.includes(data.id)) {
        setResultado(data);
        setGuardarCiudad([...guardarCiudad, data]);
        console.log(data);
      }
      console.log(data);
    } catch (error) {
      toast.error("Not found");
    }
  };

  const busquedaManual = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    try {
      const { data } = await axios(url);

      setGuardarId([...guardarId, data.id]);
      if (!guardarId.includes(data.id)) {
        setResultado(data);
        setGuardarCiudad([...guardarCiudad, data]);
        toast.success(`City added ${data.name}`);
      } else {
        toast.error("The city has already been addeds");
      }
    } catch (error) {
      toast.error("not found");
    }
  };

  const datosBusqueda = (e) => {
    e.preventDefault();
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const eliminarCiudad = (id) => {
    toast.warning("deleted");
    console.log(id);
    const eliminando = guardarCiudad.filter((elim) => id !== elim.id);
    const eliminandoId = guardarId.filter((elimId) => id !== elimId);
    setGuardarCiudad(eliminando);
    setGuardarId(eliminandoId);
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
        eliminarCiudad,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
