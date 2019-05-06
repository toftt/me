import React from 'react';
import styled from 'styled-components';

const AlbumImage = styled.img`
    border: 3px solid black;
    border-radius: 64px 5px 64px 5px/5px 64px 5px 64px;
    height: 64px;
    width: 64px;
    margin-right: 1rem;
`;

const PlayedAt = styled.p`
    color: ${props => props.theme.primary};
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.7rem;
    margin: 0;
    margin-right: 1rem;
`;

const Track = styled.div`
    display: flex;
    align-items: center;
`;

const TrackAndArtist = styled.p`
    border-bottom: 2px solid black;
    border-bottom-left-radius: 300px 5px;
    border-bottom-right-radius: 100px 6px;
    font-family: 'Patrick Hand SC', cursive;
    font-size: 1.1rem;
    margin: 0;
`;

const Artist = styled.span`
    color: ${props => props.theme.primary};
`;
const TrackName = styled.span`
    margin-right: 1rem;
`;

const Album = styled.p`
    font-family: 'Patrick Hand SC', cursive;
    font-size: 0.9rem;
    color: grey;
    margin: 0;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    overflow: hidden;
    white-space: nowrap;
`;

export default ({ playData }) => {
    const { track, played_at: playedAt } = playData;
    const { album, name: trackName, artists } = track;

    const { name: albumName, images } = album;
    const src = images[2].url;
    const artistsString = artists.map(obj => obj.name).join(', ');

    const playedAtDate = new Date(playedAt);

    return (
        <Track>
            {null && <PlayedAt>{`${playedAtDate.toLocaleDateString()} ${playedAtDate.toLocaleTimeString()}`}</PlayedAt>}
            <AlbumImage src={src} />
            <Description>
                <TrackAndArtist>
                    <TrackName>{trackName}</TrackName>
                    <Artist>{artistsString}</Artist>
                </TrackAndArtist>
                <Album>{albumName}</Album>
            </Description>
        </Track>
    );
};