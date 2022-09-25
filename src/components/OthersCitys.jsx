import useClima from "../Hooks/useClima";
import "../styles/Oc.css";
import City from "./City";

const OthersCitys = () => {
  const { guardarCiudad } = useClima();
  return (
    <>
      {guardarCiudad || guardarCiudad.main ?  (
        <div className="mainOthers">
          {guardarCiudad.map((ciudad) => (
            <City ciudad={ciudad} key={ciudad.name} />
          ))}
        </div>
      ) : null} 
    </>
  );
};
export default OthersCitys;
