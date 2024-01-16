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
            <p>Colouring books in store at <a href="https://www.popcanberra.com.au/">POP Canberra</a>, the <a href="https://popapp.au/@BumMan">POP app</a>, and <a href="https://www.etsy.com/au/shop/MrBumMan">Etsy</a>. Free wallpapers at <a href="https://bumman.gumroad.com/?sort=price_desc">Gumroad</a>. New bums on <a href="https://www.instagram.com/_bumman/">Instagram</a>.</p>


          </div>
        </div>

      </>
    )}
  </>
);

export default TopSection;
