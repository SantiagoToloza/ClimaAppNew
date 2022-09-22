import "../styles/Header.css";
import { useState, useEffect } from "react";
import Clima from "./Clima";
import { HiOutlineLocationMarker } from "react-icons/hi";
import revisarClima from "../helpers/State";
import { RiMenu5Fill } from "react-icons/ri";
import useClima from "../Hooks/useClima";
import OthersCitys from "./OthersCitys";
import Formulario from "./Formulario";
import { earth } from "../../src/img/index";
import { BsChevronDoubleDown } from "react-icons/bs";

const Header = () => {
  const { busqueda, resultado } = useClima();
  // const { ciudad } = busqueda;
  const [imagen, setImagen] = useState();

  useEffect(() => {
    if (resultado?.main) {
      setImagen(revisarClima(resultado.weather[0].main));
    } else {
      setImagen(earth);
    }
  }, [resultado]);

  return (
    <div className="header">
      <Formulario />

      {<img src={imagen} alt="" className="bg" />}
      <div className="main">
        <div className="icons">
          <div className="iconLeft">
            <HiOutlineLocationMarker className="iconH" />
            <p>{resultado.name}</p>
          </div>
          <RiMenu5Fill className="iconH" />
        </div>
        <Clima />
        <div className="verMas">
          <BsChevronDoubleDown className="bajar"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
