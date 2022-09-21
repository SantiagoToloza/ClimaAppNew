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
const revisarClima = (state) => {
  const actual = state
  const total_climate = {
    Thunderstorm: storm,
    Rain: rain,
    Snow: snow,
    Clear: afternoon,
    Clouds: cloud,
  };
  const objDefault = cloud;
  const revisar = total_climate[actual] || objDefault;
  return revisar
  ;
};
export default revisarClima;
