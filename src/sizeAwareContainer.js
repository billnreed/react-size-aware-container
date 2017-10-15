import React from 'react';
import { SizeAwareContainer } from './SizeAwareContainer.jsx';

export function sizeAwareContainer(componentClass, containerQueries) {
  return class extends SizeAwareContainer {
    componentWillMount() {
      this.setState({
        componentClass,
        containerQueries,
      });
    }
  }
}
