import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${props => props.theme.primary};
    font-size: ${props => props.large ? '1.5rem' : '1rem'}
    font-family: ${props => props.handdrawn
        ? '\'Patrick Hand SC\', cursive'
        : ''};
    max-width: 600px;
`;

export default Paragraph;