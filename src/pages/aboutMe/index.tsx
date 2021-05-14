import React from 'react';
import {Container, Row, Column} from '../../components/grid';
import Delphi from '../../assets/icons8-delphi-ide-50.png';
import Html from '../../assets/icons8-html-5-50.png';
import CSS from '../../assets/icons8-css3-50.png';
import JavaScript from '../../assets/icons8-javascript-50.png';
import ReactPng from '../../assets/icons8-react-50.png';
import {Resume, TechnologyPicture} from './styles';
import Section from '../../components/section';

function AboutMe(){
    return(
        <Section HeaderText='About Me'>
            <Container>
                <Row>
                    <Column gridLength={9}>
                        <Resume>
                            <p># Hi there My name is Oscar Worell Filho 👋</p>
                            <p>- I’m currently working as a developer with Delphi 10 on a project named SysmoVS at Sysmo Smart Systems
                                where I use to maintain the system and apply new features.
                            </p>
                            <p>- I’m learning web development(React, node.js, css, typescript) and flutter for mobile at <a href="https://app.balta.io">balta.io</a></p>
                            <p>- I really want to work on web projects because on my studies with web 
                            development I'm fell very excited when I saw the things that I can do on web, like this website that I made by myself.</p>
                            <p>- Studing Systems Analysis and Development (SAD) at Unicesumar</p>
                            <p>- Studing English for 1-2 years</p>
                        </Resume>
                    </Column> 
                    <Column gridLength={3}>
                        <div style={{marginTop: '10%'}}>
                            <h3 style={{textAlign: 'center'}}>Technolgies that I know</h3>
                            <TechnologyPicture src={Delphi} alt="Delphi"/>
                            <TechnologyPicture src={Html} alt="HTML"/>
                            <TechnologyPicture src={CSS} alt="CSS"/>
                            <TechnologyPicture src={JavaScript} alt="JavaScript"/>
                            <TechnologyPicture src={ReactPng} alt="React"/>
                        </div>
                    </Column> 
                </Row>
            </Container> 
        </Section>
    )
}
export default AboutMe;