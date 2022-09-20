import "../styles/Header.css";
import { useState, useEffect } from "react";
import Clima from "./Clima";
import { HiOutlineLocationMarker } from "react-icons/hi";
import revisarClima from "../helpers/State";
import { RiMenu5Fill } from "react-icons/ri";
import useClima from "../Hooks/useClima";

const Header = () => {
  const { busqueda, resultado } = useClima();
  const { ciudad } = busqueda;
  const [imagen, setImagen] = useState();

  useEffect(() => {
    if (resultado?.main) {
      setImagen(revisarClima(resultado.weather[0].main));
    }
  }, [resultado]);

  return (
    <div className="header">
      {resultado?.name && <img src={imagen} alt="" className="bg" />}
      <div className="main">
        <div className="icons">
          <div className="iconLeft">
            <HiOutlineLocationMarker className="iconH" />
            <p>{ciudad}</p>
          </div>
          <RiMenu5Fill className="iconH" />
        </div>
        <Clima />
      </div>
    </div>
  );
};
export default Header;
