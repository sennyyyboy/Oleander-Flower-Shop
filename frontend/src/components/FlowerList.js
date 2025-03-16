import React, { useEffect, useState } from 'react';
import { getFlowers, deleteFlower } from '../services/flowerService';

const FlowerList = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        fetchFlowers();
    }, []);

    const fetchFlowers = async () => {
        const data = await getFlowers();
        setFlowers(data);
    };

    const handleDelete = async (id) => {
        await deleteFlower(id);
        fetchFlowers();
    };

    return (
        <div>
            <h2>Flower List</h2>
            <ul>
                {flowers.map((flower) => (
                    <li key={flower.id}>
                        {flower.name} - ${flower.price} 
                        <button onClick={() => handleDelete(flower.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlowerList;