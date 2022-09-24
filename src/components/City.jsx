import "../styles/City.css";
import { AiFillCloseCircle } from "react-icons/ai";
import useClima from "../Hooks/useClima";
const City = ({ ciudad }) => {
  const Kelvin = 273.15;
  const {eliminarCiudad} = useClima()
  const { main, weather } = ciudad;
  return (
    <div className="mainCity">
      <div className="close">
        <AiFillCloseCircle className="close-icon"  onClick={()=> eliminarCiudad(ciudad.id)}/>
      </div>
      <div className="card">
        <p className="nameCity">{ciudad.name}</p>
        <p>{ciudad.weather[0].description} </p>
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png `}
        ></img>
        <div className="infoGrados">
          <p>{(main.temp_min - Kelvin).toFixed(0)} ° </p>
          <p className="gradosCity">{(main.temp - Kelvin).toFixed(0)} ° </p>
          <p>{(main.temp_max - Kelvin).toFixed(0)}°</p>
        </div>
        <p></p>
      </div>
    </div>
  );
};
export default City;
