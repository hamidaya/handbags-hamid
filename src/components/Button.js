import React from 'react';

function Button({ children, clickHandler, Disabled }) {
    return (
        <button
            type="button"
            disabled={Disabled}
            onClick={clickHandler}
        >
            { children }
        </button>
    );
}

export default Button;