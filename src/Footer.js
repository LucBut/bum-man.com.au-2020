import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <div
      style={{ fontSize: '0.9rem', marginBottom: '5px', textAlign: 'center' }}
    >
      <Link to="/" style={{ color: 'black' }}>
        Home
      </Link>
      &nbsp;&bull;&nbsp;
      <Link to="/privacy" style={{ color: 'black' }}>
        Privacy policy
      </Link>
    </div>
    <div style={{ textAlign: 'center', fontSize: '0.8rem' }}>
      {/* <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img
          alt="Creative Commons License"
          style={{
            borderWidth: 0,
            marginRight: '10px',
          }}
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
        />
      </a> */}
      {/* <br /> */}
      This work is licensed under a{' '}
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
        License
      </a>
      .
    </div>
  </>
);

export default Footer;
