import { useParams } from "react-router-dom";
import { useGetDrivinBasicsQuery } from "../../service/features/mainApi"
import { useSelector } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const TheoryExplanations = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const language = useSelector(state => state.language.language)

    const { data,isLoading,isError } = useGetDrivinBasicsQuery();
    
    const item = data?.find(section => section?.id === Number(id))

    if(!item) return <p>Not Explanations found now.Coming Soon..</p>

  return (
    <>
    <header className="traffic_signs_header">
        <nav>
          <MdOutlineKeyboardArrowLeft className='left_arrow' onClick={()=>navigate('/module/driving_basics')}/>
          <p>{language === 'en' ? item?.title_en : item?.title_ml}</p>
        </nav>
    </header>
    <main>
        <div className="drivingBasics_theories_explanations">
            {isLoading ? <p>Loading..</p> : (language === 'en' ? item?.english?.map((item,i) => (
                <p key={i}>{item}</p>
            )) : item?.malayalam?.map((item,i) => (
                <p key={i}>{item}</p>
            )))}
        </div>
    </main>
    </>
  )
}

export default TheoryExplanations
