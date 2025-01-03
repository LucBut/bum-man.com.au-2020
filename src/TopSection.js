/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from 'semantic-ui-react';

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
            style={{ alignSelf: 'center', fontSize: '1.2em', gridColumn: 1, marginBottom: '2rem' }}
          >
            <h2>Drawings from a happy place</h2>
            <p>Colouring books in store or online at <a href="https://www.poplocal.com.au/product/bum-man-colouring-book?variant=DOJUGDH7H37RVZO4STYWXQEK">POP Canberra</a>. Free wallpapers at <a href="https://bumman.gumroad.com/?sort=price_desc">Gumroad</a>. New bums on <a href="https://www.instagram.com/_bumman/">Instagram</a>.</p>


          </div>
        </div>

      </>
    )}
  </>
);

export default TopSection;
