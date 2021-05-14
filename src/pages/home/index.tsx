import React, {useState, useEffect} from 'react';
import {Container, Row, Column} from '../../components/grid';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {CentralizedContent, ProfilePicture, Resume} from './styles';
import Section from '../../components/section';

function Home(){
    return(
        <Section HeaderText=''>
            <Container>
                <Row>
                    <Column gridLength={3}>
                        <ProfilePicture src={ProfilePictureAsset} alt="Eu"/>
                        <div style={{textAlign: 'center'}}></div>
                    </Column> 
                    <Column gridLength={1}><></></Column>
                    <Column gridLength={8}>
                     <CentralizedContent>
                        <Resume>
                            <h1># Hi there My name is Oscar Worell Filho 👋</h1>
                        </Resume>
                     </CentralizedContent>
                    </Column> 
                </Row>
            </Container> 
        </Section>
    );
}

export default Home;