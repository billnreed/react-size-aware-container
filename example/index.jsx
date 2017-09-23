import React from 'react';
import ReactDOM from 'react-dom';

import { ProfileCard } from './profile-card.jsx';
import { Container } from './container.jsx';

import './index.scss';

class Message extends React.Component {
  render() {
    return (
      <div>
        <Container width="100%" height="500px">
          <ProfileCard
            name="Neil Peart"
            initials="NP"
            location="Toronto, Canada"
          />
        </Container>
        <Container width="400px" height="100px">
          <ProfileCard
            name="Geddy Lee"
            initials="GL"
            location="Toronto, Canada"
          />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Message />, document.querySelector('#app-root'));