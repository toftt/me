import styled from 'styled-components';

export default styled.footer`
    align-items: center;
    cursor: default;
    display: flex;
    flex: 0 1 100px;
    flex-direction: column;
    justify-content: center;

    a {
        color: ${props => props.theme.primary};
        :hover {
            filter: brightness(50%);
        }
    }
`;