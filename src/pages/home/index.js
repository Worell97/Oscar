import React, {useState, useEffect} from 'react';
import PageDefault from '../../components/pageDefault';
import {Container, Row, Column} from '../../components/grid';

function Home(){

    return(
        <PageDefault>
            <Container>
                <Row>
                   <Column grid='3'>
                        <a href="" alt="Picture"></a>Left side bar</Column> 
                   <Column grid='7'>Content</Column> 
                   <Column grid='2'>Something else</Column> 
                </Row>
            </Container>                   
        </PageDefault>
    );
}

export default Home;