import Layout from '../hocs/Layout';
import Link from 'next/link';

const thankYou = () => (
    <Layout
        title='Thank You'
        content=''
    >
        <h1 className='display-2 mt-5 text-center'>Thank You</h1>
        <p className='fs-5 mt-5 mb-5 text-muted text-center'>
            Your order was successful and you will be notified when your 
            item is on the way.
        </p>
        <div className='d-flex justify-content-center align-items-center'>
            <Link href='/'>
                <a className='btn btn-primary btn-lg'>
                    Back to Site
                </a>
            </Link>
        </div>
    </Layout>
);

export default thankYou;
