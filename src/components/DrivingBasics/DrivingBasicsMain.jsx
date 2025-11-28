import { useGetDrivinBasicsQuery } from "../../service/features/mainApi"
import '../../styles/DrivingBasics.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DrivingBasicsMain = () => {

    const navigate = useNavigate();
    const language = useSelector(state => state.language.language)

    const { data,isLoading,isError } = useGetDrivinBasicsQuery();

    console.log(data)

  return (
    <div className="drivingBasics_theories">
      {isLoading ? <p>Loading...</p> : (data.map((sections) => (
        <div key={sections.id} className="drivingBasics_theories_sections"
        style={{backgroundColor: sections.color }} onClick={()=> navigate(`/details/${sections.id}`)}>{language === 'en' ? sections.title_en : sections.title_ml}</div>
      )))}
    </div>
  )
}

export default DrivingBasicsMain
