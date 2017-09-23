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

      const foundSize = Object.keys(sizes).reduce((alreadyFoundSize, size) => {
        if (alreadyFoundSize.length) { return alreadyFoundSize; }

        const condition = sizes[size];
        const maxWidth = condition.maxWidth || condition['max-width'] || null;
        const minWidth = condition.minWidth || condition['min-width'] || null;

        if (maxWidth && elWidth <= maxWidth) {
          return size;
        }
        if (minWidth && elWidth >= minWidth) {
          return size;
        }

        return '';
      }, '');

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
