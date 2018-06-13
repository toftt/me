import styled from 'styled-components';

export default styled.time`
  align-items: center;
  border: 2px solid black;
  border-color: ${props => props.theme.primary};
  border-top-left-radius: 45% 52%;
  border-top-right-radius: 47% 51%;
  border-bottom-left-radius: 50% 51%;
  border-bottom-right-radius: 46% 52%;
  color: ${props => props.theme.primary};
  display: flex;
  font-family: 'Patrick Hand SC', cursive;
  height: 60px;
  justify-content: center;
  margin-right: 30px;
  width: 60px;
`;