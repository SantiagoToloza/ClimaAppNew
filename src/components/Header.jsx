import {rain,night,cloud,earth,afternoon,snow,sunset,wind,storm} from '../../src/img/index'
import  '../styles/Header.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
const Header = () => {
  return (
    <div className='header'>
        <img src={afternoon} alt="" className='rain' />
        <HiOutlineLocationMarker/>
    </div>
  )
}
export default Header