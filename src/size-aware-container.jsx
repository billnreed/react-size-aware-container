import React from 'react';
import ReactDOM from 'react-dom'

export function sizeAwareContainer(componentClass, sizes) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        size: '',
      };

      this.checkAndApplySizes = this.checkAndApplySizes.bind(this);
    }

    componentDidMount() {
      this.domNode = ReactDOM.findDOMNode(this);

      this.checkAndApplySizes();
      window.addEventListener('resize', resizeEvent => {
        this.checkAndApplySizes();
      });
    }

    checkAndApplySizes() {
      const elWidth = this.domNode.clientWidth;

      let foundSize = '';
      Object.keys(sizes).forEach(size => {
        const condition = sizes[size];
        const maxWidth = condition.maxWidth || condition['max-width'];
        const minWidth = condition.minWidth || condition['min-width'];

        if (maxWidth) {
          if (elWidth <= maxWidth) {
            foundSize = size;
          }
        }
        if (minWidth) {
          if (elWidth >= minWidth) {
            foundSize = size;
          }
        }

      });

      this.setState({
        size: foundSize,
      });
    }

    render() {
      const component = React.createElement(componentClass, this.props, this.props.children);

      return (
        <div className={this.state.size}>{component}</div>
      );
    }
  }
}
