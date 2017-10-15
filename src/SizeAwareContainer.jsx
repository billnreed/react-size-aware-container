import React from 'react';
import ReactDOM from 'react-dom';
import { QueryMatcher } from './QueryMatcher.js';

export class SizeAwareContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
    };

    this.checkAndApplySizes = this.checkAndApplyQueries.bind(this);
  }

  componentDidMount() {
    this.domNode = ReactDOM.findDOMNode(this);
    this.queryMatcher = new QueryMatcher(this.state.containerQueries);

    this.checkAndApplyQueries();
    window.addEventListener('resize', resizeEvent => {
      this.checkAndApplyQueries();
    });
  }

  checkAndApplyQueries() {
    const elWidth = this.domNode.clientWidth;

    /*
    const applicableQueries = Object.keys(this.state.containerQueries).reduce((foundQueries, query) => {
      const condition = this.state.containerQueries[query];
      const maxWidth = condition.maxWidth || condition['max-width'] || null;
      const minWidth = condition.minWidth || condition['min-width'] || null;

      if (maxWidth && elWidth <= maxWidth) {
        return foundQueries.concat([query]);
      }
      if (minWidth && elWidth >= minWidth) {
        return foundQueries.concat([query]);
      }

      return foundQueries
    }, []);
    */
    const applicableQueries = this.queryMatcher.match(elWidth);


    this.setState({
      classes: applicableQueries,
    });
  }

  render() {
    const component = React.createElement(this.state.componentClass, this.props, this.props.children);

    return (
      <div className={this.state.classes.join(" ")}>{component}</div>
    );
  }
}

SizeAwareContainer.defaultProps = {
  containerQueries: {},
  componentClass: null,
};