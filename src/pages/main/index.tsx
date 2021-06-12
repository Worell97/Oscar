import React, { InputHTMLAttributes } from 'react';
import Home from '../home';
import Menu from '../../components/menu';
import AboutMe from '../aboutMe';
import Experience from '../experience';
import Contact from '../contact';
import {
    Element,
    Events,
    scroller,
    animateScroll as scroll
  } from "react-scroll";
  
type Props = {
    children: React.ReactNode;
    HeaderText: string;
    customstyle: string;
}
class MainPage extends React.Component<any, Props>{
    constructor(props: Props | Readonly<Props>){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function() {
        console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function() {
        console.log("end", arguments);
        });
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }
    render(){
        return(
            <>
                <Menu/>
                <Element name="Home">
                    <Home/>
                </Element>
                <Element name="AboutMe">
                <AboutMe/>
                    </Element>
                <Element name="Experience">
                <Experience/>
                    </Element>
                <Element name="Contact">
                    <Contact/> 
                </Element>
            </>
        );
    }
};

export default MainPage;