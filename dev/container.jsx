import React from 'react';
import ReactDOM from 'react-dom';

import './container.scss';

export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayWidth: props.width,
      displayHeight: props.height,
    };
  }

  componentDidMount() {
    this.domNode = ReactDOM.findDOMNode(this);

    this.setState({
      displayWidth: this.domNode.clientWidth,
      displayHeight: this.domNode.clientHeight,
    });

    window.addEventListener('resize', () => {
      this.setState({
        displayWidth: this.domNode.clientWidth,
        displayHeight: this.domNode.clientHeight,
      });
    });
  }

  render() {
    const styles = {
      width: this.props.width,
      height: this.props.height,
    };

    return (
      <div className="container" style={styles}>
        <div className="container-info">
          {this.state.displayWidth} x {this.state.displayHeight}
        </div>
        <div className="container-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}