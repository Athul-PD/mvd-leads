import '../../styles/Intro.css'
import kerala_roadSafety_logo from '../../assets/images/logos/kerala-logo.webp';
import mvd_leads from '../../assets/images/logos/mvd-leads.jpg';
import mvd_logo from '../../assets/images/logos/mvd-logo.jpg';
import { useNavigate } from 'react-router-dom';

const Intro = () => {

    const navigate = useNavigate();

  return (
    <main className='main'>
        <div className="top_section">
            <div className='left_logo'>
                <img src={kerala_roadSafety_logo} alt="kerala state logo"/>
            </div>
            <div className='right_logo'>
                <img src={mvd_logo} alt="MVD logo" />
            </div>
        </div>
        <div className="hero_page">
            <div className="mvd_leads">
                <img src={mvd_leads} alt="MVD Leads" />
                <p>Learner's Education and Driver's Safety</p>
            </div>
            <div className="info">
                <p>A Road Safety Project Initiated</p>
                <p>By</p>
                <p>Motor Vehcles Department Kerala</p>
                <button onClick={()=>navigate('/home')}>Let's Start</button>
            </div>
        </div>
        <div className="footer">
            <p>Recognized by kerala Startup Mission</p>
            <h4>Infotura</h4>
        </div>
    </main>
  )
}

export default Intro
