import React from 'react';
import styled from 'styled-components';

import Track from './components/Track';
import testData from './test.json';

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
`;

export default () => (
    <FlexDiv>
        <TrackList>
        {
            testData.body.Item.recentlyPlayed.map(item => <Track playData={item} />)
        }
        </TrackList>
    </FlexDiv>
);