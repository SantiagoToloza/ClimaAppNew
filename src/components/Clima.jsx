import '../styles/Clima.css'
import useClima from '../Hooks/useClima'


const Clima = () => {
    const {resultado} = useClima()
    const {main} = resultado
    const Kelvin = 273.15
    return (
    <div className='ShowG'>
      {resultado?.name && (
        <p className='grados'>{( main.temp - Kelvin).toFixed(0)} ° </p>
      )}
        <p className='Status'>nieve</p>
    </div>
  )
}
export default Clima