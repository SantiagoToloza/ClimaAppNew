import '../styles/Clima.css'
import useClima from '../Hooks/useClima'
import ActuallyState from '../helpers/State'


const Clima = () => {
    const {resultado} = useClima()
    const {main} = resultado
    const Kelvin = 273.15
    console.log(resultado);
    ActuallyState('cloud')
    return (
    <div className='ShowG'>
      {resultado?.name && (
        <>
        <p className='grados'>{( main.temp - Kelvin).toFixed(0)} ° </p>
        <p className='Status'>{resultado.weather[0].description} </p>
        </>
      )}
    </div>
  )
}
export default Clima