import React from 'react';
import Item from './Item';
import ItemList from './ItemList';

const API_URL = "https://fierce-brook-27687.herokuapp.com/items.json"

class App extends React.Component {
    render() {
        return (
            <ItemList />
        );
    }
}

export default App;
