import { useEffect, useState } from 'react';
import './DayTimeLine.css';
function DayTimeLine(props) {
    const [openingTimeList, setOpeningTimeList] = useState([])
    useEffect(() => {
        setOpeningTimeList(props.openingTime.split(","))

    }, [props.openingTime, setOpeningTimeList])
    return (
        <div className='DayTimeLine'>
            <div >
                {props.day} -
            </div>
            <div>
                {openingTimeList.map((time) => {
                    return <div key={props.day + time}>
                        {time}
                    </div>
                })}
            </div>

        </div>
    );
}

export default DayTimeLine;
