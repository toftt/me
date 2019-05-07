import React, { useContext } from 'react';
import styled from 'styled-components';

import MusicContext from '../../MusicContext';
import Track from './components/Track';

const Header = styled.p`
    color: ${props => props.theme.primary};
    font-size: 3rem;
    font-family: 'Patrick Hand SC', cursive;
    margin: 0;

    @media only screen and (max-width : 500px) {
        font-size: 2rem;
    }
`;

const TrackList = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 0.4rem;
        margin-top: 0.4rem;
    }
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    width: 100%;
    & > *:first-child {
        margin-bottom: 1.2rem;
    }
`;

function Music() {
    const { data, isFetching } = useContext(MusicContext);
    const recentlyPlayed = data.body && data.body.Item.recentlyPlayed || [];

    return (
        <FlexDiv>
            <Header>Recently played</Header>
            <TrackList>
            {
                recentlyPlayed.map(item => <Track playData={item} />)
            }
            </TrackList>
        </FlexDiv>
    );
}

export default Music;