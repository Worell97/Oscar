import React from 'react';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {CentralizedContent, ProfilePicture, Resume, Content, Grid, Sidebar, BtnNextSection} from './styles';
import Section from '../../components/section';

function Home(){
    return(
        <Section HeaderText='' customstyle="background-color: var(--black);">
            <Grid>
                <Sidebar>
                    <ProfilePicture src={ProfilePictureAsset} alt="Eu"/>
                    <div style={{textAlign: 'center'}}></div>
                </Sidebar>
                <Content>
                    <CentralizedContent>
                        <Resume>
                            <h1># Hi there My name is Oscar Worell Filho 👋</h1>
                        </Resume>
                    </CentralizedContent>
                </Content>
                <BtnNextSection></BtnNextSection>
            </Grid>
        </Section>
    );
}

export default Home;