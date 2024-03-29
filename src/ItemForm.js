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
    let description = this.refs.newItemDescription.value;
    console.log(description)
    let newItem = {
      id: null,
      name: name,
      description: description
    };

    jQuery.ajax({
       type: "POST",
       url: "https://fierce-brook-27687.herokuapp.com/items.json",
       data: JSON.stringify({
           item: {
             id: null,
             name: newItem.name,
             description: newItem.description
           }
       }),
       contentType: "application/json",
       dataType: "json"
   })

    .done(function(data) {
      component.props.onChange();
      component.refs.newNameInput.value = "";
      component.refs.newItemDescription.value = "";
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
              <input type="text" className="form-control" ref="newItemDescription" placeholder="Does it not suck?" />
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
