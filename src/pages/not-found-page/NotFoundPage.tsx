import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer';

const NotFoundPage: React.FC = () => (
  <div className="user-page">
    <div className="sign-in user-page__content">
      <center>
        <h1>404 Not Found</h1>
        <Link style={{textDecoration: 'none'}} to='/'>
          <p className='user-block__link'>Go back to Main page</p>
        </Link>
      </center>
    </div>

    <Footer />
  </div>
);

export default NotFoundPage;
