import './BoxStatusLine.css';
import expandArrow from "../../img/expand-arrow.png"
function BoxStatusLine(props) {
    console.log(props)
    return (
        <div>
            <div className="BoxStatusLine-opening-time" dir='rtl'>
                <div className='title' dir='rtl'>שעות פתיחה:</div>
                <div className='state' style={{ color: props.isOpen ? "#2F6F4A" : "" }} dir='rtl'>{props.isOpen ? "פתוח" : "סגור"}</div>
                {props.nextStatus === "" ? <div className='next-state' dir='rtl'>לא יפתח היום</div> : <div className='next-state' dir='rtl'>{`${props.isOpen ? "יסגר" : "יפתח"} בשעה ${props.nextStatus}`}</div>
                }
                <img className="expandArrow" src={expandArrow} style={{ transform: props.isBoxOpen ? "rotate(180deg)" : "" }} alt="none" onClick={() => {
                    props.setIsBoxOpen(!props.isBoxOpen)
                }} />
            </div>
        </div>
    );
}

export default BoxStatusLine;
