import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Container = styled.div`
  background-color: ${props => props.theme.secondary};
  align-items: center;
  display: flex;
  font-family: 'Patrick Hand SC', cursive;
  justify-content: center;
  padding-top: 0.6rem;
`;

const Item = styled.span`
  color: ${props => props.theme.primary};
  margin: 1rem;
  
  :hover {
      filter: brightness(0.5);
    }
`;

const LinkItem = ({ text, to }) => (
  <NavLink
    to={to}
    exact
    activeStyle={{ textDecoration: 'underline' }}
  >
    <Item>
      {text}
    </Item>
  </NavLink>
);

export default () => (
  <Container>
    <LinkItem text="Home" to="/" />
    <LinkItem text="Resume" to="/resume" />
    <LinkItem text="Music" to="/music" />
  </Container>
);