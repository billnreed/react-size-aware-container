import React from 'react';

import { GameCollectionItem } from './game-collection-item.jsx';

import './game-collection.scss';

export class GameCollection extends React.Component {
  render() {
    return (
      <div className={`game-collection ${this.props.isGrid ? 'is-grid' : 'is-list'}`}>
        {this.props.games.map((game, index) => {
          return <GameCollectionItem {...game} key={`game-${index}`} />
        })}
      </div>
    );
  }
}

GameCollection.propTypes = {
  games: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    platform: React.PropTypes.string,
    releaseYear: React.PropTypes.string,
    coverUrl: React.PropTypes.string,
  })),
  isGrid: React.PropTypes.bool,
};

GameCollection.defaultProps = {
  games: [],
  isGrid: true,
}