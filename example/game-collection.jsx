import React from 'react';

import { GameCollectionItem } from './game-collection-item.jsx';
import { sizeAwareContainer } from '../src/size-aware-container.jsx';

import './game-collection.scss';

class __GameCollection extends React.Component {
  render() {
    return (
      <div className="game-collection">
        {this.props.games.map((game, index) => {
          return <GameCollectionItem {...game} key={`game-${index}`} />
        })}
      </div>
    );
  }
}

__GameCollection.propTypes = {
  games: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    platform: React.PropTypes.string,
    releaseYear: React.PropTypes.string,
    coverUrl: React.PropTypes.string,
  })),
};

__GameCollection.defaultProps = {
  games: [],
}

export const GameCollection = sizeAwareContainer(__GameCollection, {
  grid: {
    minWidth: 700,
  },
});