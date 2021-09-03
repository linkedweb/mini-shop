import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const layout = ({ title, content, children }) => (
    <Fragment>
        <Helmet>
            <title>Mini Shop | {title}</title>
            <meta name='description' content={content} />
        </Helmet>
        <Navbar />
        <div className='container'>
            {children}
        </div>
    </Fragment>
);

export default layout;
