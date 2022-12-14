import useClima from "../Hooks/useClima";
import "../styles/Formulario.css";

const Formulario = () => {
  const { busqueda, datosBusqueda, busquedaManual, buscarLocalidad } =
    useClima();

  const { ciudad } = busqueda;
  return (
    <div className="formAll">
      <form className="form" onSubmit={busquedaManual}>
        <div className="input-group">
          <div className="group">
            <svg
              className="icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              type="submit"
              onClick={busquedaManual}
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Search city"
              className="input"
              type="text"
              id="ciudad"
              name="ciudad"
              value={ciudad}
              onChange={datosBusqueda}
            />
          </div>
        </div>
      </form>
      <div className="main__ubication">
        <button className="ubication" onClick={buscarLocalidad}>
          enabled ubication
        </button>
      </div>
    </div>
  );
};
export default Formulario;
