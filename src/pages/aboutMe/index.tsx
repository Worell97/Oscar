import React from 'react';
import Delphi from '../../assets/icons8-delphi-ide-50.png';
import Html from '../../assets/icons8-html-5-50.png';
import CSS from '../../assets/icons8-css3-50.png';
import JavaScript from '../../assets/icons8-javascript-50.png';
import ReactPng from '../../assets/icons8-react-50.png';
import JavaPng from '../../assets/icons8-java-50.png';
import { Content, Grid, Resume, TechnologyPicture, Techs } from './styles';
import Section from '../../components/section';

function AboutMe() {
    return (
        <>
            <Section elementName="AboutMe" HeaderText="About Me" customstyle="background-color var(--primary); height: 90vh">
                <Grid>
                    <Content>
                        <Resume>
                            <p>I am a front-end developer with experience in React, JavaScript, CSS, and HTML. I have a extense background in the development of ERPs using Delphi,
                                which has provided me with a strong foundation in software development. In addition to my technical skills,
                                I am passionate about collaborating with teams to create effective solutions that meet the needs of clients.
                            </p>
                            <p>I am always eager to learn new technologies and methodologies to improve my work and bring added value to the projects I am involved in.
                                Currently, I am studying English to further expand my career opportunities and work with international teams,
                                and studing Systems Analysis and Development (SAD) at UniPar looking to finish mi graduation as soon as possible.</p>
                            <p>And I really enjoy to work on web projects and i love the things that I can do on web, like this website that I'm making by myself,
                                furthermore I'm planing to make it dynamic, maybe creating an api with Java or node and with that an admin panel, soo I'll be able to edit all the info more easily.</p>
                        </Resume>
                    </Content>
                    <Techs>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ textAlign: 'center' }}>Technolgies that I know</h3>
                            <div style={{ display: 'flex', width: '600px', justifyContent: 'space-between' }}>
                                <TechnologyPicture src={Delphi} alt="Delphi" />
                                <TechnologyPicture src={Html} alt="HTML" />
                                <TechnologyPicture src={CSS} alt="CSS" />
                                <TechnologyPicture src={JavaScript} alt="JavaScript" />
                                <TechnologyPicture src={ReactPng} alt="React" />
                                <TechnologyPicture style={{ borderRadius: '50%' }} src={JavaPng} alt="Java" />
                            </div>
                        </div>
                    </Techs>
                </Grid>
            </Section>
        </>
    )
}
export default AboutMe;