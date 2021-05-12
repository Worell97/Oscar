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
                   <Column grid='7'>Content</Column> 
                   <Column grid='2'>Something else</Column> 
                </Row>
            </Container>                   
        </PageDefault>
    );
}

export default Home;