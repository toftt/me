import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Paragraph from '../components/Paragraph';
import { HanddrawnButton } from '../components/Button';

const now = moment();
const birthDay = moment([1993, 5, 29]);
const age = now.diff(birthDay, 'years');

const f = {
  obfuscate: {
    crawlersDontLookHerePlease: {
      hmm: {
        p: '(+46) 72 563 38 39',
        m: 'c.joachim.toft@gmail.com',
      },
    },
  },
};

const Icon = styled.i`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Centered = styled.div`
  align-self: center;
`;

const ContactInfo = ({phoneNumber, email}) => (
  <Paragraph>
    <Icon className="fas fa-phone" /> {phoneNumber}
    <br />
    <Icon className="fas fa-envelope" /> {email}
  </Paragraph>
);

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayContactInfo: false };
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ displayContactInfo: true });
  }

  render() {
    return (
      <Flex>
        <div>
          <Paragraph handdrawn>
            Hello!
          </Paragraph>
          <Paragraph handdrawn>
            I am a {age} year old developer/student who is currently on the last year of my bachelor in computer engineering at KTH.
            Programming have been a big interest of mine for a long time, I wrote my first few lines of code in C++ when I was 16 years old.
            Lately I've been developing a lot in React, but I have good experince in Java and Python as well. I love the style of functional
            programming and try to use the functional patterns as much as possible in the code I write. I have also taken an interest in more 
            functional languages such as Elixir and Haskell.
          </Paragraph>
          <Paragraph handdrawn>
            Apart from programming music is a big passion of mine. I have played the piano since I was young and it's still something I do
            regularly.
            I love exploring new music and sharing it with friends, and I attend live concerts when my favorite bands/artists come to my town.
          </Paragraph>
          <Paragraph handdrawn>
            I am looking for something to do when I am done studying, so if you have any opportunities feel free contact me.
          </Paragraph>
        </div>
        <Centered>
        {
          this.state.displayContactInfo
            ? <ContactInfo
                phoneNumber={f.obfuscate.crawlersDontLookHerePlease.hmm.p}
                email={f.obfuscate.crawlersDontLookHerePlease.hmm.m}
              />
            : <HanddrawnButton onClick={(e) => this.onClick(e)}>
                Show contact info
              </HanddrawnButton>
        }
        </Centered>
      </Flex>
    );
  }
}

export default Landing;