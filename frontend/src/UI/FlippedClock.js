import "./FlippedClock.css";

const FlippedClock = (props) => {
    return (
        <div className={props.isModify ? "flippedClock-small" : "flippedClock" }>
            <div className="flippedClock-time">
                {props.start_time[0]}
            </div>
            <div className="flippedClock-time">
                {props.start_time[1]}
            </div>
            :
            <div className="flippedClock-time">
                {props.start_time[2]}
            </div>
            <div className="flippedClock-time">
                {props.start_time[3]}
            </div>
            -
            <div className="flippedClock-time">
                {props.end_time[0]}
            </div>
            <div className="flippedClock-time">
                {props.end_time[1]}
            </div>
            :
            <div className="flippedClock-time">
                {props.end_time[2]}
            </div>
            <div className="flippedClock-time">
                {props.end_time[3]}
            </div>
        </div>
    );
}

export default FlippedClock;

// props : start_time(string), end_time(string)
// example : <FlippedClock start_time={spaceData.start_time} end_time={spaceData.end_time}/>