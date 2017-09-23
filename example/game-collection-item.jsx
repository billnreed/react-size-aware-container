import React from 'react';

import './game-collection-item.scss';

export class GameCollectionItem extends React.Component {
  render() {
    return (
      <div className="game-collection-item">
        <h2 className="game-collection-item-title">{this.props.title}</h2>
        <div className="game-collection-item-body">
          <div className="game-collection-item-cover"><img className="game-collection-item-cover-image" src={this.props.coverUrl} /></div>
          <div className="game-collection-item-platform">{this.props.platform}</div>
          <div className="game-collection-item-release-year">{this.props.releaseYear}</div>
        </div>
      </div>
    );
  }
}

GameCollectionItem.propTypes = {
  title: React.PropTypes.string,
  platform: React.PropTypes.string,
  releaseYear: React.PropTypes.string,
  coverUrl: React.PropTypes.string,
}
