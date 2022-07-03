
import React from 'react';
import styled from 'styled-components';
import ComponentA from './ComponenteA';
import eyes from './images/aaa.png';

const Container = styled.div`

`


const App =() => {
  return (
    <Container>
      <ComponentA icon={eyes} colorIcon={"#fff6e5"}/>
      <ComponentA icon={eyes} colorIcon={"#ebfcf1"}/>
      <ComponentA icon={eyes} colorIcon={"#f4f2ff"}/>
        
    </Container>
  );
}

export default App;
