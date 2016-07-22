import React from 'react';
import Form from './Form';
import List from './List';

export default class Board extends React.Component {
      state = {
        lists: [],
      }

      onCreateListClick = (name) => {
        this.setState({
          lists: this.state.lists.concat([name]),
        })
      }

      render() {
        return (
          <div>
            <Form onClick={this.onCreateListClick}/>
            {this.state.lists.map(e => (<List name={e}/>))}
          </div>
        );
    }
}
