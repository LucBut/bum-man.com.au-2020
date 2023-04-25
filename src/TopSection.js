/* eslint-disable react/prop-types */
import React from 'react';
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
            style={{ alignSelf: 'center', fontSize: '1.2em', gridColumn: 1 }}
          >
            <p>Drawings from a happy place</p>


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
            <div
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                border: '1px solid darkgrey',
                borderRadius: '3px',
                boxShadow: '2px 2px 2px lightgrey',
                padding: '2px 0 2px 0',
              }}
            />


          </div>
        </div>

        <Divider />

        <div
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            marginTop: '30px',
            marginBottom: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '450px',
            border: '2px solid darkgrey',
            padding: '10px 20px 10px 20px',
            borderRadius: '5px',
            boxShadow: '2px 2px 5px lightgrey',
          }}
        >
          <p>
            Colouring book, stickers, and free wallpapers:
            <br />
            <a
              style={{ color: 'black', textDecoration: 'underline' }}
              href="https://www.etsy.com/au/shop/MrBumMan"
            >
              Etsy
            </a>{' '}
            |{' '}
            <a
              style={{ color: 'black', textDecoration: 'underline' }}
              href="https://gumroad.com/bumman"
            >
              Gumroad
            </a>{' '}


          </p>
        </div>

        <Divider />
      </>
    )}
  </>
);

export default TopSection;
