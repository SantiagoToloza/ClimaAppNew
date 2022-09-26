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

  const getCitiesFromLS = () =>
    JSON.parse(
      localStorage.getItem("guardarCiudad") || '{"guardarCiudad": []}'
    );

  const [guardarCiudad, setGuardarCiudad] = useState(getCitiesFromLS);
  useEffect(() => {
    localStorage.setItem("guardarCiudad", JSON.stringify(guardarCiudad));
  }, [guardarCiudad]);

  console.log(guardarCiudad);

  const buscarLocalidad = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
        }
      );
    }
    if (lat != null) {
      realizarBusqueda();
    }
  };

  // const realizarBusqueda = async () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  //   console.log(url);
  //   try {
  //     const { data } = await axios.get(url);
  //     toast.success("Search completed");
      
  //     if (!guardarId.includes(data.id)) {
  //       setResultado(data);
  //       setGuardarCiudad([...guardarCiudad, data]);
  //       setRender(true);
  //       console.log(data);
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     toast.error("Not found");
  //   }
  // };

  const busquedaManual = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    try {
      const { data } = await axios(url);
      setResultado(data);
      if (!guardarCiudad.find((id) => id.id === data.id)) {
        toast.success(`City added ${data.name}`);
        setGuardarCiudad([...guardarCiudad, data]);
      } else {
        toast.error("not found city");
        console.log("ya esta la ciudad");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
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
    setGuardarCiudad(eliminando);
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
