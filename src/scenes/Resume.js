import React from 'react';
import styled from 'styled-components';

import Bubble from '../components/Bubble';

const Flex = styled.div`
    align-items: center;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
`;

const Flex2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Line = styled.p`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 300px 5px;
    border-bottom-right-radius: 100px 6px;
    font-family: 'Patrick Hand SC', cursive;
`;

const Description = styled.p`
    font-family: 'Patrick Hand SC', cursive;
    font-size: 14px;
`;

const Entry = styled.article`
    width: 200px;
`;

export default () => (
    <React.Fragment>
    <Flex>
        <Bubble>2013</Bubble>
        <Flex2>
            <Entry>
                <Line>Front End Developer</Line>
                <Description>
                Worked in various projects, with technologies such as Python, React and C++.
                </Description>
            </Entry>
            <Entry>
                <Line>Media Specialist</Line>
                <Description>
                Was responsible for the overall something of the cloud Google stuff.
                </Description>
            </Entry>
        </Flex2>
    </Flex>
    <Flex>
        <Bubble>2012</Bubble>
        <Flex2>
            <Entry>
                <Line>Social Media Support</Line>
                <Description>
                The border-bottom-left-radius property defines the radius of the bottom-left corner.
                </Description>
            </Entry>
            <Entry>
                <Line>Copywriter</Line>
                <Description>
                If you set two values, the first one is for the bottom border, and the second one for the left border. If the second value is omitted, it is copied from the first.
                </Description>
            </Entry>
        </Flex2>
    </Flex>
    </React.Fragment>
);