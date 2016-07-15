import React from 'react';
import Item from './Item';
import jQuery from 'jquery';

class ItemList extends React.Component {

  constructor(){
    super();

    this.state = {
      items: [],
    };
  }

  reloadTodos(event) {
  console.log(this.state)
  let component = this;

  jQuery.getJSON(`https://fierce-brook-27687.herokuapp.com/items.json`, function(data) {

    component.setState({
      items: data
    });
  });

}

  componentDidMount() {
    this.reloadTodos();
  }


    render() {
      console.log(this.state.items);
        return (
          <div>
          {this.state.items.map(function(item) {
            console.log(item)
          return(
            <Item key={item.id} id={item.id} name={item.name} description={item.description} createdAt={item.created_at} updatedAt={item.updated_at} />
          );
        }, this)}
          </div>
        );
    }
}

export default ItemList;
