import React from 'react';
import Section from '../../components/section';
import TimeLine from '../../components/TimeLine/TimeLineContainer/TimeLineContainer';
function Experience(){
    return(
        <Section elementName="Experience" HeaderText='Professional experience' customstyle="background-color: var(--black);">
            <TimeLine/>
        </Section>
    );
}

export default Experience;