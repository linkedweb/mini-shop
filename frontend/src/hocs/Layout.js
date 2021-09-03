import Head from 'next/head';
import Navbar from '../components/Navbar';

const layout = ({ title, content, children }) => (
    <>
        <Head>
            <title>Mini Shop | {title}</title>
            <meta name='description' content={content} />
        </Head>
        <Navbar />
        <div className='container'>
            {children}
        </div>
    </>
);

export default layout;
