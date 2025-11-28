import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import DrivingBasicsMain from './DrivingBasicsMain';
import '../../styles/DrivingBasics.css'

const DrivingBasics = () => {

  const navigate = useNavigate();

  return (
    <>
      <header className="traffic_signs_header">
        <nav>
          <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/home')}/>
          <p>Know Your Driving Basics</p>
        </nav>
      </header>
      <main className='drivingBasics_main'>
        <DrivingBasicsMain/>
      </main>
    </>
  )
}

export default DrivingBasics
