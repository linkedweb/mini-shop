import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../hocs/Layout';
import DropIn from 'braintree-web-drop-in-react';
import Loader from 'react-loader-spinner';
import Image from 'next/image';

import Headphones from '../../public/images/headphones.jpg';

const CheckoutPage = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        street_address: '',
        city: '',
        country: '',
        state_province: '',
        postal_zip_code: '',
    });
    const [clientToken, setClientToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderAttempted, setOrderAttempted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({
        instance: {}
    });

    const {
        first_name,
        email,
        street_address,
        city,
        country,
        state_province,
        postal_zip_code
    } = formData;

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    'Accept': 'application/json',
                }
            }

            try {
                const res = await axios.get('http://localhost:8000/api/payment/generate-token', config);

                if (res.status === 200) {
                    setClientToken(res.data.token);
                    setLoading(false);
                    setProcessingOrder(false);
                }
            } catch(err) {
                
            }
        };

        fetchData();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\ /g, '') });
    const onAddressChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const formStyling = orderAttempted ? 'needs-validation was-validated' : 'needs-validation';

    const buy = async e => {
        e.preventDefault();

        if (
            first_name !== '' &&
            email !== '' &&
            street_address !== '' &&
            city !== '' &&
            country !== '' &&
            state_province !== '' &&
            postal_zip_code !== ''
        ) {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            };

            let { nonce } = await data.instance.requestPaymentMethod();

            setProcessingOrder(true);

            const body = JSON.stringify({
                first_name,
                email,
                street_address,
                city,
                country,
                state_province,
                postal_zip_code,
                nonce
            });

            try {
                const res = await axios.post('http://localhost:8000/api/payment/process-payment', body, config);

                if (res.status === 201)
                    setSuccess(true);
            } catch(err) {

            }

            setProcessingOrder(false);
        }
    };

    if (typeof window !== 'undefined' && success)
        router.push('/thank-you');

    return (
        <Layout
            title='Checkout'
            content=''
        >
            <h1 className='display-4 mt-5 mb-5'>Checkout Page</h1>
            <div className='row mb-5'>
                <div className='col-5'>
                    <form className={formStyling} noValidate onSubmit={buy}>
                        <h3 className='mb-5 display-6'>Your Information</h3>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='first_name'>
                                First Name*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='first_name'
                                placeholder='First Name*'
                                onChange={onChange}
                                value={first_name}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Enter Your First Name
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='email'>
                                Email*
                            </label>
                            <input
                                className='form-control'
                                type='email'
                                name='email'
                                placeholder='Email*'
                                onChange={onChange}
                                value={email}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Enter Your Email
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='street_address'>
                                Street Address*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='street_address'
                                placeholder='Street Address*'
                                onChange={onAddressChange}
                                value={street_address}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Provide Address
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='city'>
                                City*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='city'
                                placeholder='City*'
                                onChange={onAddressChange}
                                value={city}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Provide City
                            </div>
                        </div>
                        <div className='row mb-5 mt-3'>
                            <div className='col-5'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='city'>
                                        Country*
                                    </label>
                                    <select
                                        className='form-select'
                                        name='country'
                                        onChange={onAddressChange}
                                        value={country}
                                        required
                                    >
                                        <option value=''>Choose...</option>
                                        <option value='canada'>Canada</option>
                                        <option value='united_states'>United States</option>
                                    </select>
                                    <div className='invalid-feedback'>
                                        Please Provide Country
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='state_province'>
                                        State/Province*
                                    </label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='state_province'
                                        placeholder='State/Province*'
                                        onChange={onAddressChange}
                                        value={state_province}
                                        required
                                    />
                                    <div className='invalid-feedback'>
                                        Please Provide State/Province
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='postal_zip_code'>
                                        Zipcode*
                                    </label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='postal_zip_code'
                                        placeholder='Zipcode*'
                                        onChange={onAddressChange}
                                        value={postal_zip_code}
                                        required
                                    />
                                    <div className='invalid-feedback'>
                                        Please Provide Postal/Zip Code
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className='mb-5 display-6'>Payment Information</h3>
                        {
                            loading || clientToken === null ? (
                                <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                                    <Loader
                                        type='Oval'
                                        color='#00bfff'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ) : (
                                <DropIn
                                    options={{
                                        authorization: clientToken,
                                        paypal: {
                                            flow: 'vault'
                                        }
                                    }}
                                    onInstance={ instance => setData({ instance: instance }) }
                                />
                            )
                        }
                        {
                            processingOrder ? (
                                <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                                    <Loader
                                        type='Oval'
                                        color='#00bfff'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ) : (
                                <div>
                                    {
                                        loading ? (
                                            <></>
                                        ) : (
                                            <button 
                                                className='btn btn-success btn-lg mt-5 shadow'
                                                onClick={() => setOrderAttempted(true)}
                                                type='submit'
                                            >
                                                Place Order
                                            </button>
                                        )
                                    }
                                </div>
                            )
                        }
                    </form>
                </div>
                <div className='offset-1 col-6'>
                    <h3 className='display-6 mb-5'>Order Details:</h3>
                    <div className='row'>
                        <div className='col-4'>
                            <Image
                                className='img-fluid'
                                src={Headphones}
                                alt='Mini Shop Headphones'
                            />
                        </div>
                        <div className='offset-1 col-7 mt-3'>
                            <p className='fs-5 lead'>
                                Order Item: Mini Shop Headphone Set
                            </p>
                            <p className='lead fs-3'>
                                <strong>Order Total: (CAD) $47.99</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
