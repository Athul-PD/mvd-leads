import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../../styles/Concession.css'

const ConcessionCard = () => {

    const navigate = useNavigate();

  return (
    <>
          <header className="traffic_signs_header">
            <nav>
              <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/home')} />
              <p>Concession Card</p>
            </nav>
          </header>
          <main className="concession_card_main">
            <form>
                <div className="input_field">
                    <label>Enter Student Full Name</label>
                    <input type="text" placeholder="Enter your name"/>
                </div>
                <div className="input_field">
                    <label>Age</label>
                    <input type="text" placeholder="Enter your email address"/>
                </div>
                <div className="input_field">
                    <label>DOB</label>
                    <input type="date" placeholder="Enter your age"/>
                </div>
                <div className="input_field">
                    <label>Contact Number</label>
                    <input type="number" placeholder="Enter your phone number"/>
                </div>
                <div className="input_field">
                    <label>Father's Name</label>
                    <input type="number" placeholder="Enter your father's name"/>
                </div>
                <div className="input_field">
                    <label>Identification Mark</label>
                    <input type="number" placeholder="Your identification mark"/>
                </div>
                <div className="input_field">
                    <label>Course</label>
                    <input type="number" placeholder="Enter your course"/>
                </div>
                <div className="input_field">
                    <label>Concession Route</label>
                    <input type="number" placeholder="Your concession route"/>
                </div>
                <div className="input_field">
                    <label>Distance to Institution</label>
                    <input type="number" placeholder="Eg: 12km"/>
                </div>
                <button type="submit">Submit</button>
            </form>
          </main>
    </>
  )
}

export default ConcessionCard
