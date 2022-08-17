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
const Header = () => {
  return (
    <div className="header">
      <img src={afternoon} alt="" className="bg" />
      <div className="main">
        <div className="icons">
          <div className="iconLeft">
            <HiOutlineLocationMarker className="iconH" />
            <p>Berisso</p>
          </div>
          <RiMenu5Fill className="iconH" />
        </div>
        <Clima/>

      </div>
    </div>
  );
};
export default Header;
