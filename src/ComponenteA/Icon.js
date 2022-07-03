import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 25%;
`
const Body = styled.div`
    background-color: ${props => props.colorIcon};
    height:100%;
    width:100%;
    border-radius:25px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Icon = styled.img`
    height:45px;
` 

const App = ({icon,colorIcon}) => {
    console.log(colorIcon);
    return(
        <Container>
            <Body colorIcon={colorIcon} >
                <Icon src={icon}/>
            </Body>
            
        </Container>
    );
}

export default App;