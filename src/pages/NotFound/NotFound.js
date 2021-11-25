import React from 'react';
const img = 'https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif'
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center">
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;