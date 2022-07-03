import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 75%;
    padding-left:25px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Title = styled.p`
    margin:0px;
    color:#657290;
    font-weight:bold;
    font-size:15px;
`

const Descripcion = styled.p`
    margin:0px;
    margin-top:5px;
    color:#bcc1c5;
`
const Enlace = styled.a`
    margin:0px;
    href:'www.gmail.com';
`

const App = () => {
    return(
        <Container>
            <Title>
                Paquete Premium
            </Title>
            <Descripcion>
                Descubre nuevas funciones
            </Descripcion>
            <Enlace>
                Enlace
            </Enlace>
        </Container>
    );
}

export default App;