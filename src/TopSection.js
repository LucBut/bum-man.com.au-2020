import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Divider, Header } from 'semantic-ui-react';

const TopSection = ({ simple = false }) => (
  <>
    {/* Pink bum & 'Bum Man' */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        marginBottom: '50px',
      }}
    >
      <div style={{ gridColumn: 1 }}>
        <img
          src="/bumman/Profile image_bum crack.jpg"
          alt="Small cartoon bum crack"
        />
      </div>
      <div style={{ alignSelf: 'center', gridColumn: 2, marginLeft: '50px' }}>
        <Header as="h1">Bum Man</Header>
      </div>
    </div>

    {simple ? null : (
      <>
        {/* Words & social media icons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '4fr 1fr',
          }}
        >
          <div
            style={{ alignSelf: 'center', fontSize: '1.1em', gridColumn: 1 }}
          >
            Drawings from a happy place.
          </div>
          <div
            style={{
              fontSize: '36px',
              gridColumn: 3,
              justifySelf: 'end',
            }}
          >
            <a
              href="https://www.instagram.com/thebummandiaries/"
              style={{ color: '#444444', marginRight: '10px' }}
            >
              <i className="fab fa-instagram-square" />
              {/* <LazyLoadImage src="/instagram.png" /> */}
            </a>
            <a style={{ color: '#444444' }} href="https://twitter.com/mrbumman">
              <i className="fab fa-twitter-square" />
            </a>
          </div>
        </div>

        <Divider />

        <div
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            marginTop: '30px',
            marginBottom: '30px',
            textDecoration: 'underline',
            border: '2px solid darkgrey',
            padding: '10px 20px 10px 20px',
            borderRadius: '5px',
            boxShadow: '2px 2px 5px lightgrey',
          }}
        >
          <a style={{ color: 'black' }} href="https://gumroad.com/bumman">
            Colouring packs now available on Gumroad.
          </a>
        </div>

        <Divider />
      </>
    )}
  </>
);

export default TopSection;
