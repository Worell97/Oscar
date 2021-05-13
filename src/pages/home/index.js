import React, {useState, useEffect} from 'react';
import PageDefault from '../../components/pageDefault';
import {Container, Row, Column} from '../../components/grid';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {ProfilePicture} from './styles';

function Home(){

    return(
        <PageDefault>
            <Container>
                <Row>
                   <Column grid='3'>
                        <ProfilePicture src={ProfilePictureAsset} alr="Eu"/>
                        <div>Left side bar</div>
                    </Column> 
                   <Column grid='7'>
                       <text>
                        <h1># Hi there My name is Oscar Worell Filho 👋</h1>
                        <p>- I’m currently working with Delphi 10 on a project named SysmoVS</p>
                        <p>- I’m currently learning web development(React, node.js, scss, typescript) and flutter for mobile at <a href="https://app.balta.io">balta.io</a></p>
                        <p>- I really want to collaborate on web projects because on my studies with web 
                        development I'm fell very excited when I saw the things that I can do on web.</p>
                        <p>- Studing English for 1-2 years</p>
                        </text>   
                    </Column> 
                   <Column grid='2'>Something else</Column> 
                </Row>
            </Container>                   
        </PageDefault>
    );
}

export default Home;