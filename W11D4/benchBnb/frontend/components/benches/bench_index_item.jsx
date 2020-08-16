import React from 'react';

const BenchIndexItem = ({ bench })=> {
    return (
        <li className="bench-item"> 
            {bench.description},  
            {bench.lat},  
            {bench.lng} 
        </li>
    )
}

export default BenchIndexItem;