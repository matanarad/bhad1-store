import { useEffect, useState } from 'react';
import './StoreBox.css';
import BoxStatusLine from '../BoxStatusLine/BoxStatusLine';
import OpeningTime from '../OpeningTime/OpeningTime';
function StoreBox(props) {
    const [isBoxOpen, setIsBoxOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [openTime, setOpenTime] = useState('')
    const [closeTime, setCloseTime] = useState('')

    const whatDayIsToday = () => {
        const date = new Date();
        const dayOfWeek = date.getDay();
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        const dayName = daysOfWeek[dayOfWeek];
        return dayName
    }

    const isStoreOpen = (openingTime, closingTime) => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 60 + currentMinute; // Convert current time to minutes

        const openingHour = parseInt(openingTime.split(':')[0], 10);
        const openingMinute = parseInt(openingTime.split(':')[1], 10);
        const openingTimeInMinutes = openingHour * 60 + openingMinute; // Convert opening time to minutes

        const closingHour = parseInt(closingTime.split(':')[0], 10);
        const closingMinute = parseInt(closingTime.split(':')[1], 10);
        const closingTimeInMinutes = closingHour * 60 + closingMinute; // Convert closing time to minutes

        if (currentTime >= openingTimeInMinutes && currentTime <= closingTimeInMinutes) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        if (props.openingTimes !== undefined) {
            let openingTimes = props.openingTimes[whatDayIsToday()]
            if (openingTimes !== "סגור") {
                const parts = openingTimes.split("-");
                setOpenTime(parts[0])
                setCloseTime(parts[1])
                setIsOpen(isStoreOpen(openTime, closeTime))
            }
            else {
                setIsOpen(false)
            }

        }
    }, [props.openingTimes, closeTime, openTime])
    return (
        <div className="store-box" dir='trl' style={{ height: !isBoxOpen ? "10vh" : "" }}>
            <div className='store-box-title'>{props.name}</div>
            <div className='store-box-description'>{props.description}</div>
            {isBoxOpen ? <OpeningTime name={props.name} setIsBoxOpen={setIsBoxOpen} isBoxOpen={isBoxOpen} openingTimes={props.openingTimes} /> : <BoxStatusLine nextStatus={isOpen ? closeTime : openTime} isOpen={isOpen} setIsBoxOpen={setIsBoxOpen} isBoxOpen={isBoxOpen} />}
        </div>
    );
}

export default StoreBox;
