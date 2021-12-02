import React from 'react';
import Section from '../../components/section';
import data, { ExperienceType } from '../../data/experiences';
function Experience(){
    return(
        <Section elementName="Experience" HeaderText='Professional experience' customstyle="background-color: var(--black);">
        <ul>
            {data.map((item: ExperienceType) =>
                <li key={item._id}> 
                    <section>
                        <h3>{`${item.StartDate} - ${item.EndDate} - ${item.Company}`}</h3>
                        <title>{item.Title}</title>
                        <p>{item.Description}</p>
                    </section>
                </li>
            )}  
        </ul>
        </Section>
    );
}

export default Experience;