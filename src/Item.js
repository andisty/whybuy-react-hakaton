import React from 'react';
import $ from 'jquery';

class Item extends React.Component {
  componentDidMount() {
     this.setState({
       id: this.props.id,
       name: this.props.name,
       description: this.props.description
     });
   }
   render() {
    return(
      <div>
      {this.state.id} <br />
      {this.state.name}<br />
      {this.state.description}<br />
      </div>
    );
  }
}


export default Item;
