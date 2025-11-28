import '../../styles/Questionbank.css'
import QuestionMain from './QuestionMain'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Questionbank = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="traffic_signs_header">
        <nav>
          <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/home')}/>
          <p>Question Bank</p>
        </nav>
      </header>
      <main>
        <QuestionMain />
      </main>
    </>
  )
}

export default Questionbank
