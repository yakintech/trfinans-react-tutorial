import React from 'react'
import styled from 'styled-components'


function CssSample3() {

    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


    return (<>
    <Wrapper>
            <Title>Çağatay</Title>
    </Wrapper>

    <section>
        <h1></h1>
    </section>
    
    </>)
}

export default CssSample3