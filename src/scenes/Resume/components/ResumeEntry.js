import React from 'react';
import styled from 'styled-components';

const Entry = styled.article`
    width: 300px;
`;

const JobTitle = styled.p`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 300px 5px;
    border-bottom-right-radius: 100px 6px;
    font-family: 'Patrick Hand SC', cursive;
    margin-bottom: 2px;
`;

const Workplace = styled.p`
    filter: opacity(70%);
    font-family: 'Patrick Hand SC', cursive;
    margin-top: 3px;
`;

const Description = styled.p`
    font-family: 'Patrick Hand SC', cursive;
    font-size: 14px;
`;

export default props => (
    <Entry>
        <JobTitle>{props.title}</JobTitle>
        <Workplace>{props.workplace}</Workplace>
        <Description>
            {props.description}
        </Description>
    </Entry>
);