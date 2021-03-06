import * as React from 'react';

import { busShape } from '../utils/PropTypes';

export interface Props {
  name: string | Symbol;
  [key: string]: any;
}

export default class Fill extends React.Component<Props, void> {
  static contextTypes = {
    bus: busShape
  };

  componentWillMount() {
    this.context.bus.emit('fill-mount', {
      fill: this
    });
  }

  componentDidUpdate() {
    this.context.bus.emit('fill-updated', {
      fill: this
    });
  }

  componentWillUnmount() {
    this.context.bus.emit('fill-unmount', {
      fill: this
    });
  }

  render() {
    return null;
  }
}
