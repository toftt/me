import React from 'react';
import styled from 'styled-components';

import calendar from './images/calendar.png';
import resume from './images/resume.png';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
`;

const ProjectEntry = styled.article`
    display: flex;
    align-items: center;
    margin: 2rem 0;
    & > * {
        margin: 1rem;
    }
    @media only screen and (max-width : 660px) {
        flex-direction: column;
        & > * {
            margin: 0 !important;
        }
    }
`;

const Description = styled.div`
    display: block;
`;

const Title = styled.p`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 300px 5px;
    border-bottom-right-radius: 100px 6px;
    font-family: 'Patrick Hand SC', cursive;
    font-size: 1.4rem;
    margin-bottom: 2px;
`;

const SubTitle = styled.p`
    filter: opacity(70%);
    font-family: 'Patrick Hand SC', cursive;
    margin-top: 3px;
`;

const DescriptionBody = styled.p`
    font-family: 'Patrick Hand SC', cursive;
    margin-top: 3px;
`;

const ProjectImage = styled.img`
    border: 3px solid black;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    height: 193px;
    width: 280px;
`;


export default () => (
    <FlexDiv>
        <ProjectEntry>
            <a target="_blank" rel="noopener noreferrer" href="https://toftt.github.io/calendar/">
                <ProjectImage src={calendar} />
            </a>
            <Description>
                <Title>Christmas Calendar</Title>
                <SubTitle><a target="_blank" rel="noopener noreferrer" href="https://github.com/toftt/calendar">https://github.com/toftt/calendar</a></SubTitle>
                <DescriptionBody>
                    This project won 1st place on Spotify DevX Sthlm Hackathon 2018!
                    <br /><br />
                    A music Christmas calendar that allows users to add their own collection of 24 songs
                    and share it with friends. The songs can be unwrapped one by one for each day of December.
                    The page is fully static and made with React and Redux. Makes heavy use of the Spotify API. 
                </DescriptionBody>
            </Description>
        </ProjectEntry>
        <ProjectEntry>
            <a target="_blank" rel="noopener noreferrer" href="https://toftt.github.io/me">
                <ProjectImage src={resume} />
            </a>
            <Description>
                <Title>Online Profile</Title>
                <SubTitle><a target="_blank" rel="noopener noreferrer" href="https://github.com/toftt/me">https://github.com/toftt/me</a></SubTitle>
                <DescriptionBody>
                    My online profile -- always a work in progress.
                    <br /><br />
                    Made with React and styled-components.
                </DescriptionBody>
            </Description>
        </ProjectEntry>
    </FlexDiv>
);