import React from 'react';
import $ from 'jquery';
import Item from './Item';

class ListItems extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Loading...",
      listItems: []
    };
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems() {

    let component = this;

    $.getJSON(`https://fierce-brook-27687.herokuapp.com/items.json`, function(data) {
      console.log(data);

      component.setState({
        listItems: data
      });
    });
  }


  renderListItems(item, index) {
    return (
      <Item
       key={item.id}
       id={item.id}
       name={item.name}
       description={item.description}
       />
    );
  }

  render() {
    let name = this.state.name;
    let listItems = this.state.listItems;

    return (
      <div>
        <h1>{this.name}</h1>
        <div>
          {listItems.map(this.renderListItems.bind(this))}
        </div>
      </div>
    );
  }
}

export default ListItems;
