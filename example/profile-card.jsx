import React from 'react';

import { sizeAwareContainer } from '../src/size-aware-container.jsx';

import './profile-card.scss';

class __ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <header className="profile-card-header">
          <div className="profile-card-avatar">BR</div>
          <div className="profile-card-name">Bill Reed</div>
          <div className="profile-card-location">Cambridge, MA</div>
        </header>
        <div className="body">
          <div className="profile-card-bio">Meggings edison bulb hammock, tilde photo booth yuccie shaman franzen bushwick. Snackwave readymade knausgaard organic biodiesel hell of palo santo mustache tattooed everyday carry cliche slow-carb brunch gastropub ethical. Migas actually vape, four loko ramps taiyaki wolf biodiesel banjo bitters. Sriracha dreamcatcher before they sold out raclette four loko crucifix shaman brooklyn lo-fi kickstarter butcher tbh XOXO coloring book. Keytar whatever actually, chambray offal cold-pressed taxidermy mlkshk lyft occupy. Kinfolk jianbing viral, narwhal salvia chartreuse art party kitsch asymmetrical cray brunch distillery vegan small batch tofu.</div>
        </div>
      </div>
    );
  }
}

export const ProfileCard = sizeAwareContainer(__ProfileCard, {
  small: 500,
});