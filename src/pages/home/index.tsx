import React from 'react';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {CentralizedContent, ProfilePicture, Resume} from './styles';
import Section from '../../components/section';

function Home(){
    return(
        <Section HeaderText='' customstyle="background-color: var(--black);">
            <ProfilePicture src={ProfilePictureAsset} alt="Eu"/>
            <div style={{textAlign: 'center'}}></div>
            <CentralizedContent>
                <Resume>
                    <h1># Hi there My name is Oscar Worell Filho 👋</h1>
                </Resume>
            </CentralizedContent>
        </Section>
    );
}

export default Home;