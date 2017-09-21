import React from 'react';

import './container.scss';

export class Container extends React.Component {
  render() {
    const styles = {
      width: this.props.width,
      height: this.props.height,
    };

    return (
      <div className="container" style={styles}>
        <div className="container-info">
          {this.props.width} x {this.props.height}
        </div>
        <div className="container-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}