import React, { useState } from 'react';
import { createFlower } from '../services/flowerService';

const AddFlower = ({ onFlowerAdded }) => {
    const [flower, setFlower] = useState({ name: '', price: '', stock: '' });

    const handleChange = (e) => {
        setFlower({ ...flower, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createFlower(flower);
        onFlowerAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
            <input type="number" name="stock" placeholder="Stock" onChange={handleChange} required />
            <button type="submit">Add Flower</button>
        </form>
    );
};

export default AddFlower;