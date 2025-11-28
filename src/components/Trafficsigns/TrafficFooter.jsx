import { TiInfoLarge } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import '../../styles/TrafficSigns.css'
import { useEffect } from "react";

const TrafficFooter = ({ currentSign, setCurrentSign }) => {

  useEffect(() => {
    window.scrollTo({top: 0,behavior: 'smooth'})
  },[currentSign])

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setCurrentSign('infomatory')}
        className={`footer_icons ${currentSign === 'infomatory' ? 'active' : ''}`}>
        <TiInfoLarge />
        <p>Infomatory Sign</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setCurrentSign('mandatory')}
        className={`footer_icons ${currentSign === 'mandatory' ? 'active' : ''}`}>
        <FaRegStar  />
        <p>Mandatory Sign</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setCurrentSign('cautionary')}
        className={`footer_icons ${currentSign === 'cautionary' ? 'active' : ''}`}>
        <FaExclamationTriangle  />
        <p>Cautionary Sign</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setCurrentSign('other_signs')}
        className={`footer_icons ${currentSign === 'other_signs' ? 'active' : ''}`}>
        <TiTick />
        <p>Other Signs</p>
      </div>
    </>
  )
}

export default TrafficFooter
