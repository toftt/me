import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const AlbumImage = styled.img`
    border: 3px solid black;
    border-radius: 64px 5px 64px 5px/5px 64px 5px 64px;
    height: 64px;
    width: 64px;
    margin-right: 1rem;
`;

const PlayedAt = styled.p`
    color: ${props => props.theme.primary};
    display: inline-block;
    font-family: ${props => props.theme.fontSans};
    font-size: 0.7rem;
    margin: 0;
    margin-left: 1rem;
    white-space: nowrap;
`;

const Track = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Artist = styled.span`
    color: ${props => props.theme.primary};
    font-family: ${props => props.theme.fontCursive};
    font-size: 0.9rem;
    margin: 0;

    overflow: hidden;
    text-overflow: ellipsis;
`;
const TrackName = styled.span`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 300px 5px;
    border-bottom-right-radius: 100px 6px;
    display: inline-block;
    font-family: ${props => props.theme.fontCursive};
    font-size: 1rem;
`;

const TrackNameWrapper = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    white-space: nowrap;
`;

const ImageDescriptionWrapper = styled.div`
    display: flex;
    overflow: hidden;
`;

const getPlayedAtString = (datestring) => {
    const then = moment(datestring);

    return then.fromNow();
};

export default ({ playData }) => {
    const { track, played_at: playedAt } = playData;
    const { album, name: trackName, artists } = track;

    const { name: albumName, images } = album;
    const src = images[2].url;
    const artistsString = artists.map(obj => obj.name).join(', ');

    const playedAtString = getPlayedAtString(playedAt);

    return (
        <Track>
            <ImageDescriptionWrapper>
                <AlbumImage src={src} />
                    <Description>
                        <TrackNameWrapper><TrackName>{trackName}</TrackName></TrackNameWrapper>
                        <Artist>{artistsString}</Artist>
                    </Description>
            </ImageDescriptionWrapper>
            <PlayedAt>{playedAtString}</PlayedAt>
        </Track>
    );
};