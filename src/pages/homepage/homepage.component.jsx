import React from 'react';

import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss';

const homepage = ({ history }) => {
    return (
        <div className="homepage">
           <Directory />
        </div>
    )
}

export default homepage
