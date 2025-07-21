import React, { useState } from 'react'

function PrintOptions({ onPrint }) {
    const [paperSize, setPaperSize] = useState('a3');

    const handleChange = (e) => {
        const selectedSize = e.target.value;
        setPaperSize(selectedSize);
        onPrint(selectedSize);
    };

    return (      
        <div className='print:hidden text-lg border w-fit px-4'>
            <label>
                Paper Size:{" "}
                <select 
                    value={paperSize} 
                    onChange={handleChange}
                >
                    <option value="a4">A4 Landscape</option>
                    <option value="a3">A3 Landscape</option>
                </select>
            </label>
        </div>
    );
}

export default PrintOptions