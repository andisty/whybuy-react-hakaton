import React from 'react';
import ListItems from './ListItems';
import Item from './Item'

const API_URL = "https://fierce-brook-27687.herokuapp.com/"

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>{ListItems}</h1>
          </div>
        );
    }
}

export default App;
