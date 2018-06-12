import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${props => props.theme.primary};
    font-family: ${props => props.handdrawn
        ? '\'Patrick Hand SC\', cursive'
        : ''};
    max-width: 600px;
`;

export default Paragraph;