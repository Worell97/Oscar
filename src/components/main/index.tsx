import React, {useState, useEffect, useRef} from 'react';
import AboutMe from '../../pages/aboutMe';
import Home from '../../pages/home';
import {Main} from './styles';
import Menu from '../menu';
import Contact from '../../pages/contact';

function MainPage(){
    return(
        <Main>
            <Menu/>
            <Home/>
            <AboutMe/>             
            <Contact/>
        </Main>
    );
}

export default MainPage;