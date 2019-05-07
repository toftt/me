import styled from 'styled-components';

const Button = styled.button`
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    border-color: ${props => props.theme.primary};
    border-radius: 4px;
    color: ${props => props.theme.primary};
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
        background-color: ${props => props.theme.primary};
        border-color: ${props => props.theme.primary};
        color: whitesmoke;
    }
`;

const HanddrawnButton = styled(Button)`
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border-width: 2px;
    font-family: 'Patrick Hand SC', cursive;
`;

export { Button, HanddrawnButton };