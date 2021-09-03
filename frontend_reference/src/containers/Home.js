import React from 'react';
import Layout from '../hocs/Layout';
import { Link } from 'react-router-dom';

import Headphones from '../assets/images/headphones.jpg';

const home = () => (
    <Layout
        title='Home'
        content=''
    >
        <h1 className='display-4 mt-5'>Mini Shop</h1>
        <h2 className='fs-4 fw-light fst-italic mt-3'>
            Where you can buy the worlds greatest headphones...
        </h2>
        <div className='mt-5 bg-light p-5 rounded shadow'>
            <h3 className='display-6'>Check Out Our Unreal Headphone Set</h3>
            <p className='lead mt-3 mb-4'>
                Most ergonomic and highest sound quality headphones in the world!
            </p>
            <Link className='btn btn-info shadow-sm' to='/checkout'>
                I WANT THESE HEADPHONES!
            </Link>
        </div>
        <div className='row mt-5 mb-5'>
            <div className='col-3'>
                <img
                    className='img-fluid'
                    src={Headphones}
                    alt='Mini Shop Headphones'
                />
            </div>
            <div className='offset-2 col-7'>
                <ul className='list-group list-group-flush mt-5'>
                    <li className='list-group-item fs-4 lead'>
                        Insane Comfort
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        Greatest Sound Quality
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        Bluetooth Compatible
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        Size Adjustable
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        Noise Cancelling
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        Built-In Microphone
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
);

export default home;
