import { useGetQuestionsQuery } from '../../../../service/features/mainApi'
import { useSelector } from 'react-redux';

const QuestionMain = () => {

    const language = useSelector(state => state.language.language)

    const { data,isError,isLoading } = useGetQuestionsQuery();
    console.log(data)

  return (
    <div className="questionBank_main">
      {isLoading ? <p>Loading...</p> : (data.map((question,i) => (
        <div key={question.id} className='question_container'>
            <div className="question_container_questions">
                <p><span>{i + 1}</span> {language === 'en' ? question. question_en : question. question_ml}</p>
            </div>
            <div className="question_container_answers">
                {Object.entries(question.options).map(([key,ans]) => (
                    <p key={key}><span>{key.toUpperCase()}</span> {language === 'en' ? ans.en : ans.ml}</p>
                ))}
            </div>
            <div className="question_correct_answers">
                <p><span>{language === 'en' ? 'Correct' : 'ശരിയായ ഉത്തരം'}</span> {question.answer.toUpperCase()}</p>
            </div>
        </div>
      )))}
    </div>
  )
}

export default QuestionMain
