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

      let foundSize = false;
      Object.keys(sizes).forEach(size => {
        if (elWidth <= sizes[size]) {
          foundSize = true;
          this.setState({
            size,
          });
        }
      });

      if (!foundSize) {
        this.setState({
          size: '',
        });
      }
    }

    render() {
      const props = Object.assign({}, this.props, { ref: el => this.el = el })
      const component = React.createElement(componentClass, props, this.props.children);

      return (
        <div className={this.state.size}>{component}</div>
      );
    }
  }
}
