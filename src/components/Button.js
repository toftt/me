import styled from 'styled-components';
import colors from '../constants/colors';

const Button = styled.button`
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    border-color: ${colors.VIOLA};
    border-radius: 4px;
    color: ${colors.VIOLA};
    cursor: pointer;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    justify-content: center;
    padding-bottom: .375em;
    padding-left: .75em;
    padding-right: .75em;
    padding-top: .375em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    :hover {
        background-color: ${colors.VIOLA};
        border-color: ${colors.VIOLA};
        color: whitesmoke;
    }
`;

const HanddrawnButton = Button.extend`
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border-width: 2px;
    font-family: 'Patrick Hand SC', cursive;
`;

export { Button, HanddrawnButton };