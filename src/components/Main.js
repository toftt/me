import styled from 'styled-components';

export default styled.main`
    align-items: center;
    background-color: ${props => props.theme.secondary};
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding-bottom: 3rem;
    padding-top: 3rem;
    padding-right: 1rem;
    padding-left: 1rem;
`;