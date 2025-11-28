import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../../styles/ExamConfirmation.css'

const ExamConfirmation = () => {

    const navigate = useNavigate();

  return (
    <>
          <header className="traffic_signs_header">
            <nav>
              <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/home')}/>
              <p>Mock Test</p>
            </nav>
          </header>
          <main className='confirmationExam_main'>
            <div className="mockTestImg_container">
                <img src='/images/logos/exam.jpg' alt="exam image" />
                <div className="mockTest_info">
                    <div className="totalQn">
                        <h2>30</h2>
                        <p>Total Qn</p>
                    </div>
                    <div className="total_minutes">
                        <h2>15</h2>
                        <p>Minute</p>
                    </div>
                </div>
            </div>
            <div className="mockExam_instruction">
                <p>Instructions</p>
                <p>Mock Test</p>
            </div>
            <div className="general_instructions">
                <p>General Instruction</p>
                <ol>
                    <li> Total Number of Questions: 30</li>
                    <li>Time per Question: You have 30 seconds to answer each question.</li>
                    <li>Captcha: If captcha in a question, time will be 45 seconds</li>
                    <li>Total Time: The total time for the entire test is 15minutes.</li>
                    <li>Passing Criteria: You must achieve a minimum of 60% (18 correct answers out of 30) to pass the test.</li>
                    <li>Test Completion: At the end of the test, your scorewill be displayed. You must score 60% or more to pass.</li>
                    <li>Stay Focused: Read each question carefully and answer to the best of your ability. You will have only 30 seconds per question, so use your time wisely.</li>
                </ol>
                <button onClick={()=>navigate('/module/mock')}>START</button>
            </div>
          </main>
    </>
  )
}

export default ExamConfirmation