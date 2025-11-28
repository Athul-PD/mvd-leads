import '../../styles/TrafficSigns.css'
import { useGetSymbolsQuery } from '../../service/features/mainApi';
import { useSelector } from 'react-redux';
import  Skeleton  from '@mui/material/Skeleton';
import { fixImages } from '../../helper/fixImage';

const TrafficMain = ({ currentSign }) => {

    const language = useSelector(state => state.language.language)

    const { data,isLoading } = useGetSymbolsQuery();

    const filteredData = data?.filter(item => item.category === currentSign) || [];

    if(isLoading){
      return(
        <>
        {[...Array(12)].map((_,i) => (
        <div className='traffic_signs_images_info' key={i}>
          <Skeleton
          style={{width: '100%'}}
          sx={{ bgcolor: 'grey.100' }}
          variant="rectangular"
          height={170}
        />
        </div>
        ))}
        </>
      )
    }

  return (
    <>
    {filteredData.map((signs) => (
        <div className='traffic_signs_images_info' key={signs.id}>
            <img src={fixImages(signs.image)} alt={signs.options.a.en} loading='lazy' onLoad={(e) => e.target.classList.add('loaded')}/>
            <p>{language === 'en' ? signs.options[signs.answer].en : signs.options[signs.answer].ml}</p>
        </div>
    ))}
    </>
  )
}

export default TrafficMain
