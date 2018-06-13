import React from 'react';
import styled from 'styled-components';

import Bubble from '../components/Bubble';

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
`;

const Line = styled.p`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 300px 5px;
    border-bottom-right-radius: 100px 6px;
    font-family: 'Patrick Hand SC', cursive;
`;

export default () => (
    <Flex>
        <Bubble>2011</Bubble>
        <Line>Front End Developer</Line>
    </Flex>
);