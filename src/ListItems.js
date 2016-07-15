import React from 'react';
import $ from 'jquery';
import Item from './Item';

class ListItems extends React.Component {
  contructor() {
    super();

    this.state = {
      name: "Loading...",
      listItems: []
    };
  }

  renderListItems(item, index) {
    return (
      <h2>Items list</h2>
    );
  }

  render() {
    let name = this.state.name;
    let listItems = this.state.listItems;

    return (
      <div>
        <h1>{name}</h1>
        <div>
          {listItems.map(this.renderItem.bind(this))}
        </div>
      </div>
    );
  }
}

export default ListItems;
