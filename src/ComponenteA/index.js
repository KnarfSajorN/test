import React from "react";
import styled from "styled-components";

import Icon from './Icon';
import Body from './Body';


const Container = styled.div`
      height: 80px;
      width : 350px;
      display:flex;
      flex-direction:row;
      margin-top:15px;
`

const App = (params) => {
    return(
        <Container>
            <Icon icon={params.icon} colorIcon={params.colorIcon}></Icon>
            <Body></Body>
        </Container>
    );
}


export default App;