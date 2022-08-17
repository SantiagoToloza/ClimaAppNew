import { useContext } from "react";
import ClimaContext from "../Context/ClimaProvider";
const useClima = () => {
  return useContext(ClimaContext);
};
export default useClima;
