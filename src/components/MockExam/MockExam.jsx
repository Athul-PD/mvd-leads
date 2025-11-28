import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import MockExamMain from "./MockExamMain";
import { useState } from "react";

const MockExam = () => {

  const navigate = useNavigate();
  const [exit,setExit] = useState(false);

  const exitHandler = () => {
    setExit(true)
  }
  return (
    <>
      <header className="traffic_signs_header">
        <nav>
          <MdOutlineKeyboardArrowLeft onClick={exitHandler}className='left_arrow' />
          <p>Mock Test</p>
        </nav>
      </header>
      <main className="mockExam_header">
        <MockExamMain/>
            {
        exit && (
        <div className="quit_confirm_container">
          <h3>Confirm</h3>
            <p>Do you want to Quit?</p>
            <div className="yes_or_no">
                <p onClick={()=>navigate('/home')}>Yes</p>
                <p onClick={()=>setExit(false)}>No</p>
            </div>
        </div>
        )
    }
      </main>
    </>
  )
}

export default MockExam
