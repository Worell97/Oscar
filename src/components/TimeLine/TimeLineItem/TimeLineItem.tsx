import { ExperienceType } from "../../../data/experiences";
import './styles.css';

interface TimeLineItemProps {
    data: ExperienceType
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({ data }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <time>{data.StartDate} -  {data.EndDate}</time>
                <span className="tag" style={{ background: data.Category.color }}>
                    {data.Title}
                </span>
                <h2>{data.Company}</h2>
                <title>{data.Title}</title>
                <p>{data.Description}</p>
                <span className="circle" />
            </div>
        </div>
    )
}

export default TimeLineItem;