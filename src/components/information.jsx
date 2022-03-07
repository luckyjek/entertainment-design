import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Information = props => {
    const history = useHistory();
    return(
        <>
            <nav>
                <Link to={`/main`}>Home | </Link>
                <Link to={`/info`}>INVESTORS |</Link>
                <Link to={`/card`}>MAKE CARD</Link>
            </nav>

            <h1>Information</h1>
            <button 
                onClick={() => {
                    history.push('/');
                }}
            >Go to Main
            </button>
        </>
    )
}

export default Information;