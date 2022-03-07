import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = props => {
    const history = useHistory();
    return(
        <>
            <h1>Card</h1>
            <button 
                onClick={() => {
                    history.push('/info');
                }}
            >Go to Information
            </button>
        </>
    );
};

export default Card;