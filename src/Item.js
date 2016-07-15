import React from 'react';

class Item extends React.Component {
  constructor() {
  super();

  this.state = {
    loading: true
      };
    }

  componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
      loading: !!!this.props.id
    });
  }
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  updateItem(newItem) {
    console.log(newItem);
    this.syncState({item: newItem});
  }

  // toggleChecked(event) {
  //   this.syncState({
  //     completed: this.refs.completed.checked
  //   });
  // }

  syncState(updatedState) {
    console.log("Syncing state!");

    this.setState({
      loading: true
    });

    let component = this;

    let newState = jQuery.extend({
      id: this.state.id,
      name: this.state.name,
      description: this.state.description
    }, updatedState);

    this.setState(newState);

    console.log(newState);

    jQuery.ajax({
      type: "PUT",
      url: `https://fierce-brook-27687.herokuapp.com/items/${this.props.id}.json`,
      data: JSON.stringify({
          item: newState
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      console.log(data);

      component.setState({
        id: data.item.id,
        name: data.item.name,
        description: data.item.description
      });
    })

    .fail(function(error) {
      console.log(error);
    })

    .always(function() {
      component.setState({
        loading: false
      });
      component.props.onChange();
    });
}

    render() {
      console.log(this.state);
        return (
          <div>
            <ul>
              <li>{this.state.id}</li>
              <li>{this.state.name}</li>
              <li>{this.state.description}</li>
              <li>{this.state.availability}</li>
            </ul>
          </div>
        );
    }
}

export default Item;
