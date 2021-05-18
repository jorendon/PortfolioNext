import React from 'react';

export default function Image(props) {
    return (
        <div className="card border-secondary mb-2 animate__animated animate__fadeInRight animate__slower"
             style={{minHeight: 550}}>

            <div className="card-header text-white">Image</div>
            <div className="card-body text-center">
                <img
                    src={props.imgSrc}
                    className='img-fluid rounded-circle'
                    alt=''
                    style={{maxWidth: 500}}
                />
            </div>
        </div>
    );
}