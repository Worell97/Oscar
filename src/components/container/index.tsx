import React from 'react';
import { StyledContainer } from './styles';
import {
    Events,
    animateScroll as scroll,
    scrollSpy
  } from "react-scroll";
import ScrollSnap from 'scroll-snap';
  
type Props = {
    children: React.ReactNode;
    HeaderText: string;
    customstyle: string;
}
const snapConfig = {
    snapDestinationY: '90vh',
    timeout: 100,
    duration: 300,
    threshold: 0.2,
    snapStop: false,
  }

function callBack() {
    console.log('snapped')    
}

class Container extends React.Component<any, Props>{
    container = React.createRef<HTMLDivElement>();
    constructor(props: Props | Readonly<Props>){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToBottom() {
      scroll.scrollToBottom();
    }
    
    scrollTo(target: number) {
        scroll.scrollTo(target);
    }

    scrollMore(){
      scroll.scrollMore(100);
    }

    handleSetActive(to: string){
      console.log(to);
    }

    bindScrollSnap(){
        const element = this.container.current;
        if (element){
            const snapElement = new ScrollSnap(element, snapConfig);
            snapElement.bind(callBack);
        }
    };

    componentDidMount() {
        this.bindScrollSnap();
        Events.scrollEvent.register("begin", function() {
        console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function() {
        console.log("end", arguments);
        });        

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    } 
    
    render(){
        return(
            <StyledContainer>
                {this.props.children}
            </StyledContainer>
        )
    }
}

export default Container;