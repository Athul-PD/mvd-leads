const QuestionCard = ({ question, index, language = 'en' }) => {
  return (
    <div className='question_container'>
      <div className="question_container_questions">
        <p><span>{index + 1}</span> {language === 'en' ? question.question_en : question.question_ml}</p>
      </div>
      <div className="question_container_answers">
        {Object.entries(question.options).map(([key, ans]) => (
          <p key={key}><span>{key.toUpperCase()}</span> {language === 'en' ? ans.en : ans.ml}</p>
        ))}
      </div>
      <div className="question_correct_answers">
        <p><span>{language === 'en' ? 'Correct' : 'ശരിയായ ഉത്തരം'}</span> {question.answer.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default QuestionCard;
