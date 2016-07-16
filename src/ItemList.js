import React from 'react';
import jQuery from 'jquery';
import Item from './Item';
import ItemForm from './ItemForm';

class ItemList extends React.Component {

  constructor(){
    super();

    this.state = {
      items: [],
    };
  }

  reloadItems(event) {
  console.log(this.state)
  let component = this;

    jQuery.getJSON(`https://fierce-brook-27687.herokuapp.com/items.json`, function(data) {

      component.setState({
        items: data
      });
    });
  }

  componentDidMount() {
    this.reloadItems();
  }


    render() {
      console.log(this.state.items);
        return (
          <div className="container">
            <ItemForm onChange={this.reloadItems.bind(this)} />

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
