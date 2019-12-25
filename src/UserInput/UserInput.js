import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px sloid red',
        padding: '8px',
        // visibility: 'hidden',
    }

    return <input 
            style={inputStyle}
            type="text"
            onChange={props.changed}
            value={props.currentName} />;
}

export default userInput;