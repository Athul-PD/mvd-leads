import { useNavigate } from 'react-router-dom'
import '../../styles/Result.css'
import { useSelector,useDispatch } from 'react-redux'
import { resetPoints } from '../../service/features/createLanguage'

const ResultPage = () => {

    const points = useSelector(state => state.language.totalPoints)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const tryHandler = () => {
        navigate('/module/mock')
        dispatch(resetPoints())
    }

    const homeHandler = () => {
        navigate('/home')
        dispatch(resetPoints())
    }

  return (
    <div className='result_page'>
        <div className='emoji_container'>
            <h1>{points < 18 ? '😔' : '😍'}</h1>
            <h2 style={{color: points >= 18 ? 'green' : 'red'}}>{points < 18 ? 'Better Luck Next Time!' : 'Congratulations You are eligible for Learners Exam'}</h2>
        </div>
        <div className='score_container'>
            <h1>{points}</h1>
            <p>Total Points!</p>
        </div>
        <div className='try_again_container'>
            <button onClick={homeHandler}>Go Back</button>
            <button onClick={tryHandler}>Try Again</button>
        </div>
    </div>
  )
}

export default ResultPage

