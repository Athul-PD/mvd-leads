import { useGetQuestionsQuery } from '../../service/features/mainApi'
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard'

const QuestionMain = () => {

    const language = useSelector(state => state.language.language)

    const { data,isError,isLoading } = useGetQuestionsQuery();
    console.log(data)

  return (
    <div className="questionBank_main">
      {isLoading ? <p>Loading...</p> : (data.map((question,i) => (
        <QuestionCard key={question.id} question={question} index={i} language={language} />
      )))}
    </div>
  )
}

export default QuestionMain
