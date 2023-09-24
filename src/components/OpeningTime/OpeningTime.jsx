import { useEffect, useState } from 'react';
import './OpeningTime.css';
import expandArrow from "../../img/expand-arrow.png"
import DayTimeLine from '../DayTimeLine/DayTimeLine';
function OpeningTime(props) {
    const [openingTimesList, setOpeningTimesList] = useState([])
    const hebrewDays = ["ראשון", "שני", "שלישי", "רבעי", "חמישי", "שישי", "שבת"]
    useEffect(() => {
        setOpeningTimesList(Object.values(props.openingTimes))
    }, [props.openingTimes])
    return (
        <div className="opening-time" dir='rtl' onClick={() => {
            props.setIsBoxOpen(!props.isBoxOpen)
        }}>
            <div className='title' dir='rtl'>שעות פתיחה:</div>
            <div className='time-table'>
                {openingTimesList.map((openingTime, index) => {
                    return <DayTimeLine openingTime={openingTime} key={hebrewDays[index]} day={hebrewDays[index]} />
                })}
                <div>טלפון לחירום - {props.phoneNumber}</div>
            </div>

            <img className="expandArrow" src={expandArrow} style={{ transform: props.isBoxOpen ? "rotate(180deg)" : "", marginTop: props.isBoxOpen ? "5px" : "" }} alt="none" />
        </div>
    );
}

export default OpeningTime;
