import data, { ExperienceType } from "../../../data/experiences";
import TimeLineItem from "../TimeLineItem/TimeLineItem";

const TimeLine = () => {
    data.length > 0 && (
        <div className="timeline-container">
            {data.map((item: ExperienceType) => (
                <TimeLineItem data={item}/>
            ))}
        </div>
    )
}

export default TimeLine;