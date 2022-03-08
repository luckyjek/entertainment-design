import React from 'react';
import { useHistory } from 'react-router-dom';

const Investors = (props) => {
    const history = useHistory();

    return(
        <>
            <h3>Comming Soon</h3>       
            <button 
            onClick={() => {
                history.push('/info');
            }}
            >Go to Infomation
            </button>
        </>
    )
};

export default Investors;