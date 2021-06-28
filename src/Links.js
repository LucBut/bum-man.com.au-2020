/* eslint-disable */
import React, { useState } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import 'semantic-ui-less/semantic.less';
import './index.css';

const Link = ({ text, url }) => {
  const [colour, setColour] = useState('black');
  const [background, setBackground] = useState('white');
  return (
    <a
      href={url}
      style={{
        textAlign: 'center',
        border: '4px solid black',
        padding: '1rem',
        fontWeight: '600',
        background: `${background}`,
        color: `${colour}`,
      }}
      onMouseEnter={() => {
        setColour('white');
        setBackground('#D65A8D');
      }}
      onMouseLeave={() => {
        setColour('black');
        setBackground('white');
      }}
    >
      {text}
    </a>
  );
};

const Links = () => {
  return (
    <Container text style={{ margin: '50px 0 100px 0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gridAutoFlow: 'row',
          gap: '1rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src="/bumman/Profile image_bum crack.jpg"
            style={{ borderRadius: '9999px', width: '70px', height: '70px' }}
          />
        </div>
        <div>Colouring pages now available on our:</div>
        <Link url="https://www.etsy.com/au/shop/MrBumMan" text="Etsy shop" />
        <Link url="https://gumroad.com/bumman" text="Gumroad shop" />
        <div style={{ marginTop: '1.5rem' }} />
        <Link url="https://bum-man.com.au/" text="Website" />
        <Link url="https://blog.bum-man.com.au/" text="Blog" />
        <Link
          url="https://www.instagram.com/thebummandiaries/"
          text="Instagram"
        />
        <Link url="https://twitter.com/MrBumMan" text="Twitter" />
      </div>
    </Container>
  );
};

export default Links;
