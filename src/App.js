import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Paragraph from './components/Paragraph';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';
import colors from './constants/colors';

import Landing from './scenes/Landing';
import Resume from './scenes/Resume/index';
import Projects from './scenes/Projects';

const theme = {
  primary: colors.TAPESTRY,
  secondary: colors.SATIN_LINEN,
};

const Div = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100%;
`;

const Title = styled.h1`
  font-family: 'Tangerine', cursive;
  font-size: 5em;
`;

const WipDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;

  font-size: 3rem;
  font-family: 'Patrick Hand SC', cursive;
  color: ${props => props.theme.primary};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Div>
          <Header>
            <Title>
              Joachim Toft
          </Title>
          </Header>
          <Menu />
          <Main>
            <Route exact path={'/'} component={Landing} />
            <Route path={'/resume'} component={Resume} />
            <Route path={'/music'} component={() => <WipDiv>WIP</WipDiv>} />
            <Route path={'/projects'} component={Projects} />
          </Main>
          <Footer>
            <Paragraph handdrawn>
              Created by Joachim Toft.
            </Paragraph>
            <Paragraph handdrawn>
              <a href="https://github.com/toftt">github</a>&nbsp;|&nbsp;
              <a href="https://www.codewars.com/users/toftt">codewars</a>&nbsp;|&nbsp;
              <a href="https://www.linkedin.com/in/joachim-toft-a232a9128/">linkedin</a>&nbsp;|&nbsp;
              <a href="https://twitter.com/toft__joachim">twitter</a>
            </Paragraph>
          </Footer>

        </Div>
      </ThemeProvider>
    );
  }
}

export default App;
