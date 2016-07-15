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
    let description = this.refs.newItemDescription;
    let newItem = {
      id: null,
      name: name,
      description: description
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
      component.refs.newNameInput.value = "";
      component.refs.newDescriptionInput.value = "";
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
            <h1>Your item up for grabs</h1>
            <div className="form-group col-xs-10">
              <input type="text" className="form-control" ref="newItemInput" placeholder="What item you have to offer?" />
              <input type="text" className="form-control" ref="newDescriptionInput" placeholder="Does it not suck?" />
            </div>
            <div className="form-group col-xs-2">
              <button type="submit" className="btn btn-primary">Add item</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemForm;
