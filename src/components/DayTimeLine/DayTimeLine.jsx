import './DayTimeLine.css';
function DayTimeLine(props) {
    return (
        <div className='DayTimeLine'>
            <div>
                {props.day}
            </div>
            <div>
                {props.openingTime}
            </div>
        </div>
    );
}

export default DayTimeLine;
