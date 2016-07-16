import React from 'react';
import ItemList from './ItemList';

const API_URL = "localhost:3030/items.json"

class App extends React.Component {
    render() {
        return (
            <ItemList />
        );
    }
}

export default App;
