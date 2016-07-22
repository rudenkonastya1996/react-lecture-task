import React from 'react';
import Board from './Board';

export default class List extends React.Component {
      render() {
        return (
          <div>
            <div>{this.props.name}</div>
            <div></div>
            <div>
            </div>
          </div>
        );
    }
}
