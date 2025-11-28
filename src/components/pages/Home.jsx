import '../../styles/Home.css'
import { drivingModules } from '../../../public/data/menu';
import { changeLanguage } from '../../service/features/createLanguage';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

    const language = useSelector(state => state.language.language)
    const dispatch = useDispatch()

  return (
    <>
    <header>
        <nav>
            <div aria-label='logo' className="logo">
                <div className="logo_img">
                    <img src='/images/logos/mvd-logo.jpg' alt="MVD logo" />
                </div>
                <div className="mvdlogo_info">
                    <h1>MVD LEADS</h1>
                    <p>Learner's education and Driver's Safety</p>
                </div>
            </div>
            <div aria-label='Select your language' className="select_language">
                <select id="languageSelect" className='selector'
                value={language}
                onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                    <option value="en">English</option>
                    <option value="ml">Malayalam</option>
                </select>
            </div>
        </nav>
    </header>
    <main className='homePage_main'>
                {drivingModules.map((item) => (
                        item.type === 'IDTR' ? (
                            <a href='https://idtrkerala.com/' target='_blank' key={item.id}>
                                <div className='boxes' style={{backgroundColor: item.color}}>
                                    <div className="icons_design">
                                        <p>{item.icon}</p>
                                    </div>
                                    <div className="item_info">
                                        {language === 'en' ? item.title : item.malayalamTitle}
                                    </div>
                                </div>
                            </a>
                        ) : item.type === 'mock' ? (
                            <Link to={'/examconfirmation'} key={item.id}>
                                <div className='boxes' style={{backgroundColor: item.color}}>
                                    <div className="icons_design">
                                        <p>{item.icon}</p>
                                    </div>
                                    <div className="item_info">
                                        {language === 'en' ? item.title : item.malayalamTitle}
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <Link to={`/module/${item.type}`} key={item.id}>
                                <div className='boxes' style={{backgroundColor: item.color}}>
                                    <div className="icons_design">
                                        <p>{item.icon}</p>
                                    </div>
                                    <div className="item_info">
                                        {language === 'en' ? item.title : item.malayalamTitle}
                                    </div>
                                </div>
                            </Link>
                        )
                ))}
    </main>
    </>
  )
}

export default Home
