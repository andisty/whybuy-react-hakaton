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

    render() {
      console.log(this.state);
        return (
          <div>
            {this.state.id}
            {this.state.name}
            {this.state.description}
            {this.state.availability}
          </div>
        );
    }
}

export default Item;
