import React from 'react';
import ReactDOM from 'react-dom'

export function sizeAwareContainer(componentClass, containerQueries) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        size: '',
      };

      this.checkAndApplySizes = this.checkAndApplyQueries.bind(this);
    }

    componentDidMount() {
      this.domNode = ReactDOM.findDOMNode(this);

      this.checkAndApplyQueries();
      window.addEventListener('resize', resizeEvent => {
        this.checkAndApplyQueries();
      });
    }

    checkAndApplyQueries() {
      const elWidth = this.domNode.clientWidth;

      const applicableQueries = Object.keys(containerQueries).reduce((foundQueries, query) => {
        const condition = containerQueries[query];
        const maxWidth = condition.maxWidth || condition['max-width'] || null;
        const minWidth = condition.minWidth || condition['min-width'] || null;

        if (maxWidth && elWidth <= maxWidth) {
          return foundQueries.concat([query]);
        }
        if (minWidth && elWidth >= minWidth) {
          return foundQueries.concat([query]);
        }

        return foundQueries
      }, '');

      this.setState({
        size: applicableQueries,
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
