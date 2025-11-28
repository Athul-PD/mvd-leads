import { useSelector,useDispatch } from 'react-redux'
import { useGetQuestionsQuery,useGetSymbolsQuery } from '../../service/features/mainApi'
import { useEffect, useState } from 'react'
import { increaseTotalpoints,resetPoints } from '../../service/features/createLanguage'
import Captcha from './Captcha'
import { getCaptcha, setTimer } from '../../helper/helper'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const QnandAns = ({ setCurrentQn,currentQn,time,setTime }) => {


    const [symbolsFinalArray,setSymbolsFinalArray] = useState([]);
    const [questionsFinalArray,setQuestionsFinalArray] = useState([]);
    const [allQuestions,setAllQuestions] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);

    // Captcha States...
    const [captcha,setcaptcha] = useState(false)
    const [getCaptchaCode,setGetCaptchaCode] = useState('');
    const [inputValue,setInputvalue] = useState('');
    const [tryCaptcha,setTryCaptcha] = useState(1);

    const language = useSelector(state => state.language.language)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data: symbols,isLoading: symbolsL} = useGetSymbolsQuery();
    const {data: questions,isLoading: questionsL} = useGetQuestionsQuery();

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5)
    }

    // SYMBOLS - Pick 15 random questions...
    useEffect(()=> {
        if(symbols){
            const flattedsymbols = symbols.flat(Infinity)

            const shuffled = shuffleArray(flattedsymbols)

            const fifteenQn = shuffled.slice(0,15)

            setSymbolsFinalArray(fifteenQn)
        }
    },[symbols])

    // QUESTIONS - Pick 15 random questions...
    useEffect(()=> {
        if(questions){
            const flattedQuestions = questions.flat(Infinity)

            const shuffled = shuffleArray(flattedQuestions)

            const fifteenQn = shuffled.slice(0,15)

            setQuestionsFinalArray(fifteenQn)
        }
    },[questions])

    // Merge Both Final Arrays Correctly
    useEffect(() => {
        if(symbolsFinalArray.length > 0 && questionsFinalArray.length > 0){
            const shuffled = shuffleArray([...symbolsFinalArray,...questionsFinalArray])
            setAllQuestions(shuffled)
        }
    },[symbolsFinalArray,questionsFinalArray])

    const nextQuestionFunc = (auto = false) => {
        const idx = currentQn - 1
        if(!auto && !selectedKey) return toast.error('Please select an answer.')

        if(!auto && captcha){
            if(inputValue.trim() !== getCaptchaCode.trim()){
                setTryCaptcha(prev => prev + 1)
                toast.error('Captcha does not match.')
                console.log(tryCaptcha)
                if(tryCaptcha === 2){
                    navigate('/resultpage')
                }
                return
            }
            setTryCaptcha(1)
        }

        const currentAnswer = allQuestions[idx]?.answer;
        if(selectedKey === currentAnswer){
            dispatch(increaseTotalpoints(1))
        }

        if(idx + 1 >= allQuestions.length) {
            navigate('/resultpage')
            return;
        }

        setCurrentQn(prev => prev + 1)
        setSelectedKey(null)
        setInputvalue('')

        const nextQn = currentQn + 1
        if(nextQn % 3 === 0){
            setTime(45)
            setcaptcha(true)
            setGetCaptchaCode(getCaptcha())
        }else{
            setcaptcha(false)
            setTime(30)
        }
    }

    const selectAnswer = (key) => {
        setSelectedKey(key)
    }

    useEffect(() => {
            const stop = setTimer(time,setTime,() => {
                setTimeout(() => {
                    nextQuestionFunc(true);
                },0)
            })
            return () => stop()
    },[time])

    if(questionsL || symbolsL) return <p>Loading...</p>

  return (
    <>
    <div className="qn_ans_layout">
        {(() => {
            const idx = currentQn - 1
            return (
                <>
                    <p>{allQuestions[idx]?.[language === 'en' ? "question_en" : "question_ml"]}</p>
                    {allQuestions[idx]?.image && <img src={allQuestions[idx]?.image} />}
                    <ul className="answers_layout">
                        {Object.entries(allQuestions[idx]?.options || {}).map(([key,ans]) => (
                            <li key={key} className={selectedKey === key ? 'selected' : ''}>
                                <button
                                    onClick={() => selectAnswer(key)}
                                    style={{backgroundColor: selectedKey === key ? '#C5D5F0' : ''}}
                                >
                                    {language === 'en' ? ans.en : ans.ml}
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )
        })()}
        <div className="captcha_container">
            {captcha && <Captcha getCaptchaCode={getCaptchaCode} setInputvalue={setInputvalue}/>}
        </div>
        <button onClick={()=>nextQuestionFunc(false)}>Confirm</button>
    </div>
    </>
  )
}

export default QnandAns
