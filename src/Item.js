import React from 'react';
import jQuery from 'jquery';

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

// ############### Update item to create an new item #######################
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
// adding the new created item to the db in json
    jQuery.ajax({
      type: "POST",
      url: `localhost:3030/items.json`,
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

// ########DESTROY#############################################################
  onDestroy(event) {
    event.preventDefault();
    console.log("Destroy clicked!");

    let component = this;
    // delete item from json
    jQuery.ajax({
      type: "DELETE",
      url: `https://fierce-brook-27687.herokuapp.com/items/${this.props.id}.json`,
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      console.log(data);
      console.log("Gone bitch");
    })

    .fail(function(error) {
      console.log(error);
    })

    .always(function(event) {
        component.props.onDestroy();
      });
  }
  // #####################################################################
    render() {
      console.log(this.state);
        return (
          
          <div className="col s6">
            <div className="card">
              <div className="card-image">
                <img src="http://nationkart.com/blog/wp-content/uploads/2015/09/tools.jpg" />
                <span className="card-title"><h2>{this.state.name}</h2></span>
              </div>
              <div className="card-content">
                <blockquote className="flow-text">
                  {this.state.description}
                </blockquote>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#" className="destroy pull-right" onClick={this.onDestroy.bind(this)}>Cancel Item</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Item;
