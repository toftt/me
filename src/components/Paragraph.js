import styled from 'styled-components';
import colors from '../constants/colors';

const Paragraph = styled.p`
    color: ${colors.VIOLA};
    font-family: ${props => props.handdrawn
        ? '\'Patrick Hand SC\', cursive'
        : ''};
    max-width: 600px;
`;

export default Paragraph;