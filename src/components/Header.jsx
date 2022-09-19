import {
  rain,
  night,
  cloud,
  earth,
  afternoon,
  snow,
  sunset,
  wind,
  storm,
} from "../../src/img/index";
import "../styles/Header.css";

import Clima from "./Clima";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";
import useClima from "../Hooks/useClima";
const Header = () => {
  const {busqueda} = useClima()
  const {ciudad} = busqueda




 


  return (
    <div className="header">
      <img src={storm} alt="" className="bg" />
      <div className="main">
        <div className="icons">
          <div className="iconLeft">
            <HiOutlineLocationMarker className="iconH" />
            <p>{ciudad}</p>
          </div>
          <RiMenu5Fill className="iconH" />
        </div>
        <Clima/>

      </div>
    </div>
  );
};
export default Header;
