import React from 'react';
import Nav from '../Components/Nav'

const Edit = () => {
    // returns user to log in page if not logged in
    if(sessionStorage.getItem("authenticated") === 'false'){
        window.location.replace('/');
    }

    return (
        <div>
            <Nav logged={true}></Nav>
            
        </div>
    )
}

export default Edit;