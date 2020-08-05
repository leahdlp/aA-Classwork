import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock.jsx"

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('main')
    ReactDOM.render(<Clock />, root);
});
