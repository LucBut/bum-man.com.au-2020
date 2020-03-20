import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Divider, Header } from 'semantic-ui-react';

const TopSection = () => (
  <>
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

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '4fr 1fr',
      }}
    >
      <div style={{ fontSize: '1.1em', gridColumn: 1 }}>
        Born around 1991 in Clarence, NSW, Australia.
      </div>
      <div style={{ gridColumn: 3, justifySelf: 'end' }}>
        <a href="https://www.instagram.com/thebummandiaries/">
          <LazyLoadImage src="/instagram.png" />
        </a>
      </div>
    </div>
    <Divider />
  </>
);

export default TopSection;
