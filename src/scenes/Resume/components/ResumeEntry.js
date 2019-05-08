import React from 'react';
import styled from 'styled-components';

const Entry = styled.article`
    max-width: 300px;
    padding: 0 1rem;
`;

const JobTitle = styled.p`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 100px 2px;
    border-bottom-right-radius: 100px 6px;
    font-family: ${props => props.theme.fontCursive};
    margin-bottom: 2px;
    font-size: 1.4rem;
`;

const Workplace = styled.p`
    filter: opacity(70%);
    font-family: ${props => props.theme.fontCursive};
    margin-top: 3px;
`;

const Description = styled.p`
    font-family: ${props => props.theme.fontCursive};
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