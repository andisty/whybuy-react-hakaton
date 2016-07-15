import React from 'react';
import jQuery from 'jquery';

class ItemForm extends React.Component {
  constructor() {
    super();
  }

  createItem(event) {
    event.preventDefault();

    let component = this;
    let name = this.refs.newItemInput.value;


    let newItem = {
      id: null,
      name: name
    };

    jQuery.ajax({
      type: "POST",
      url: `https://fierce-brook-27687.herokuapp.com/items.json`,
      data: JSON.stringify({
          item: newItem
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      component.props.onChange();
      component.refs.newTodoInput.value = "";
    })

    .fail(function(error) {
      console.log(error);

    });
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.createItem.bind(this)}>
          <div className="row">
            <h1>Todo List Rails-React</h1>
            <div className="form-group col-xs-10">
              <input type="text" className="form-control" ref="newTodoInput" placeholder="What needs to be done?" />
            </div>
            <div className="form-group col-xs-2">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemForm;
