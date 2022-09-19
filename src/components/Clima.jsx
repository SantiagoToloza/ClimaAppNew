import "../styles/Clima.css";
import useClima from "../Hooks/useClima";
import ActuallyState from "../helpers/State";

const Clima = () => {
  const { resultado } = useClima();
  const { main } = resultado;
  const Kelvin = 273.15;
  console.log(resultado);
  ActuallyState("cloud");
  return (
    <div className="ShowG">
      {resultado?.name && (
        <>
          <p className="Status">{resultado.weather[0].description}</p>
          <div className="temp">
            {/* <img src={`https://openweathermap.org/img/w/${resultado.weather[0].icon}.png`} alt="icono" className="icono" /> */}
            <p>{(main.temp_min - Kelvin).toFixed(0)} </p>
            <p className="grados">{(main.temp - Kelvin).toFixed(0)} ° </p>
            <p>{(main.temp_max - Kelvin).toFixed(0)}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Clima;
