import { MdTimer } from "react-icons/md";
import '../../styles/MockExamMain.css'
import QnandAns from "./QnandAns";
import { useState } from "react";

const MockExamMain = () => {

    const TOTAL = 30;

    const [currentQn,setCurrentQn] = useState(1);
    const [time,setTime] = useState(30);

  return (
    <>
    <div className="timer_qn_number_container" aria-label="time left and total questions header">
        <div className="timer_qn_number_container_sub_container">
            <p><span>{currentQn}</span>/<span>{TOTAL}</span></p>
            <div className="timer">
                <MdTimer/>
                <p>0:{time < 10 ? `0${time}` : time}</p>
            </div>
        </div>
    </div>
    <div className="questions_answers_container">
        <QnandAns setCurrentQn={setCurrentQn} currentQn={currentQn} time={time} setTime={setTime} />
    </div>
    </>
  )
}


export default MockExamMain
