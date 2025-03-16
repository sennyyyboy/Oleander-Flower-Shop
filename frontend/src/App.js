import React from 'react';
import FlowerList from './components/FlowerList';
import AddFlower from './components/AddFlower';

function App() {
    return (
        <div>
            <h1>Flower Shop</h1>
            <AddFlower onFlowerAdded={() => window.location.reload()} />
            <FlowerList />
        </div>
    );
}

export default App;