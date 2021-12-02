import { ExperienceType } from "../../../data/experiences";


const TimeLineItem = (data: any) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{background: data.Category.color}}> 
                {data.Category.tag}
            </span>
            <time>{data.StartDate}</time>
            <h2>{data.Company}</h2>
            <title>{data.Title}</title>
            <p>{data.Description}</p>
            <span className="circle"/>
        </div>
    </div>
)

export default TimeLineItem;