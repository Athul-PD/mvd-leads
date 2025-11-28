import '../../../styles/Questionbank.css'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import QuestionMain from './QuestionMain';

const Questionbank = () => {

  const navigate = useNavigate();

  return (
    <>
        <header className="traffic_signs_header">
          <nav>
            <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/home')}/>
            <p>Learner's Test Question Bank</p>
          </nav>
        </header>
        <QuestionMain />
    </>
  )
}

export default Questionbank
