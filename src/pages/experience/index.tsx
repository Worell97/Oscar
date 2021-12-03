import React from 'react';
import Section from '../../components/section';
import TimeLine from '../../components/TimeLine/TimeLineContainer/TimeLineContainer';
import data, { ExperienceType } from '../../data/experiences';
function Experience(){
    return(
        <Section elementName="Experience" HeaderText='Professional experience' customstyle="background-color: var(--black);">
            <TimeLine/>
        </Section>
    );
}

export default Experience;