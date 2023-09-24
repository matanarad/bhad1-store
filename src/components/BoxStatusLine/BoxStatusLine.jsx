import './BoxStatusLine.css';
import expandArrow from "../../img/expand-arrow.png"
function BoxStatusLine(props) {
    return (
        <div onClick={() => {
            props.setIsBoxOpen(!props.isBoxOpen)
        }}>
            <div className="BoxStatusLine-opening-time" dir='rtl'>
                <div className='title' dir='rtl'>פרטים:</div>
                {props.nextStatus === "" ? <div className='next-state' dir='rtl'>לא יפתח היום</div> : <div className='next-state' dir='rtl'>{`${props.isOpen ? "יסגר" : "יפתח"} בשעה ${props.nextStatus}`}</div>
                }
                <img className="expandArrow" src={expandArrow} style={{ transform: props.isBoxOpen ? "rotate(180deg)" : "" }} alt="none" />
            </div>
        </div>
    );
}

export default BoxStatusLine;
