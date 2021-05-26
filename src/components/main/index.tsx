import React from 'react';
import AboutMe from '../../pages/aboutMe';
import Home from '../../pages/home';
import {Main} from './styles';
import Menu from '../menu';
import Contact from '../../pages/contact';
import Experience from '../../pages/experience';

function MainPage(){
    return(
        <>
            <Menu/>
            <Main>
                <Home/>
                <AboutMe/> 
                <Experience/>            
                <Contact/>
            </Main>
        </>
    );
}

export default MainPage;