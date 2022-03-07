import React from 'react';
import { useHistory } from 'react-router-dom';

const Main = props => {
    const history = useHistory();
    return(
        <>
            <h1>Main</h1>
            <button 
                onClick={() => {
                    history.push('/info');
                }}
            >Go to Information
            </button>
        </>
    );
};

export default Main;