import React from 'react';
import styled from 'styled-components';

import TextBubble from './components/TextBubble';
import ResumeEntry from './components/ResumeEntry';

const Flex = styled.div`
    align-items: center;
    display: flex;
    @media only screen and (max-width : 500px) {
        flex-direction: column;
    }
`;

const EntryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Header = styled.p`
    align-self: center;
    color: ${props => props.theme.primary};
    font-size: 3rem;
    font-family: ${props => props.theme.fontCursive};
    margin: 0;
    margin-top: 20px;
    @media only screen and (max-width : 500px) {
        text-align: center;
    }
`;

const Category = styled.div`
    max-width: 400px;
`;

const ResumeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width : 1400px) {
        flex-direction: row !important;
        width: 100%;
        justify-content: space-evenly;
    }
`;

export default () => (
    <ResumeWrapper>
        <Category>
            <Header>Work</Header>
            <Flex>
                <TextBubble>2017</TextBubble>
                <EntryWrapper>
                    <ResumeEntry
                        title="Developer"
                        workplace="we know it"
                        description="Worked independently on various projects, most regarding web sites. I worked on both frontend (React, Redux etc.) and backend (Python, Django)."
                    />
                </EntryWrapper>
            </Flex>
            <Flex>
                <TextBubble>2016</TextBubble>
                <EntryWrapper>
                    <ResumeEntry
                        title="First Line Support (Social media)"
                        workplace="Transcom"
                        description="General support with a specialization on social media (Facebook, Twitter and Instagram)."
                    />
                </EntryWrapper>
            </Flex>
            <Flex>
                <TextBubble>2014</TextBubble>
                <EntryWrapper>
                    <ResumeEntry
                        title="First Line Support"
                        workplace="Transcom"
                        description="Worked as support for a large Swedish streaming company, handling everything from technical problems to billing questions."
                    />
                </EntryWrapper>
            </Flex>
            </Category>
            <Category>
            <Header>Education</Header>
            <Flex>
                <TextBubble>2016</TextBubble>
                <EntryWrapper>
                    <ResumeEntry
                        title="Bachelor in computer engineering"
                        workplace="KTH Royal Institute of Technology"
                        description="With focus on software engineering."
                    />
                </EntryWrapper>
            </Flex>
        </Category>
        <Category>
            <Header>Skills</Header>
            <Skill
                text="Javascript"
                proficiency="0.9"
            />
            <Skill
                text="React"
                proficiency="0.8"
            />
            <Skill
                text="Python"
                proficiency="0.6"
            />
            <Skill
                text="Django"
                proficiency="0.5"
            />
            <Skill
                text="Java"
                proficiency="0.65"
            />
            <Skill
                text="SQL"
                proficiency="0.5"
            />
            <Skill
                text="XML"
                proficiency="0.6"
            />
            <Skill
                text="Elixir"
                proficiency="0.3"
            />
            <Skill
                text="PHP"
                proficiency="0.3"
            />
            <Skill
                text="C++"
                proficiency="0.2"
            />
            <Skill
                text="Haskell"
                proficiency="0.23"
            />
        </Category>
    </ResumeWrapper>
);

const SkillWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const Skill = props => (
    <SkillWrapper>
        <BoxText>{props.text}</BoxText>
        <Box fill={props.proficiency} />
    </SkillWrapper>
);

const Box = styled.div`
    background: linear-gradient(
        to right,
        rgba(167,84,134,1) calc(200px * ${props => props.fill}),
        rgba(167,84,134,0) calc(200px * ${props => props.fill})
        );
    border: 2px solid black;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    height: 20px;
    width: 200px;
`;

const BoxText = styled.p`
    color: ${props => props.theme.primary};
    font-family: ${props => props.theme.fontCursive};
    margin-right: 5px;
`;