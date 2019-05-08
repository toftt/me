import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { MusicProvider } from './MusicContext';

import Paragraph from './components/Paragraph';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';
import colors from './constants/colors';

import Landing from './scenes/Landing';
import Resume from './scenes/Resume/index';
import Projects from './scenes/Projects';
import Music from './scenes/Music';

const theme = {
  primary: colors.TAPESTRY,
  secondary: colors.SATIN_LINEN,
  fontCursive: '\'Patrick Hand SC\', cursive',
  fontSans: '\'IBM Plex Sans\', sans-serif'
};

const Div = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100%;
`;

const Title = styled.h1`
  font-family: 'Tangerine', cursive;
  font-size: 4rem;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MusicProvider>
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
              <Route path={'/music'} component={Music} />
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
        </MusicProvider>
      </ThemeProvider>
    );
  }
}

export default App;
