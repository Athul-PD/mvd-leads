import '../../styles/TrafficSigns.css'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TrafficMain from './TrafficMain';
import TrafficFooter from './TrafficFooter';

const TrafficSign = () => {
  const navigate = useNavigate();
  const [currentSign, setCurrentSign] = useState('Infomatory'.toLowerCase());

  return (
    <>
      <header className="traffic_signs_header">
        <nav>
          <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/home')} />
          <p>Know Your Traffic Signs</p>
        </nav>
      </header>
      <main className='traffic_signs_main'>
        <TrafficMain currentSign={currentSign} />
      </main>
      <footer className="footer_signs">
        <TrafficFooter currentSign={currentSign} setCurrentSign={setCurrentSign} />
      </footer>
    </>
  )
}
export default TrafficSign
