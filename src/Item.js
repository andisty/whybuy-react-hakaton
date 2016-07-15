import React from 'react';

class Item extends React.Component {

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt

    });
  }

    render() {
        return (
          <div>
            {this.state.id}
            {this.state.name}
            {this.state.description}
          </div>
        );
    }
}

export default Item;
