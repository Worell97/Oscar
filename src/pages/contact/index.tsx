import React, {useState, useEffect} from 'react';
import {Container, Row, Column} from '../../components/grid';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {CentralizedContent, ProfilePicture, Resume} from './styles';
import Section from '../../components/section';

function Contact(){
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

export default Contact;