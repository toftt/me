import styled from 'styled-components';

export default styled.main`
    align-items: center;
    background-color: ${props => props.theme.secondary};
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding-bottom: 3em;
    padding-top: 3em;
`;