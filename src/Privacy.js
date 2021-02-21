/* eslint-disable */
import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './image.css';

import TopSection from './TopSection';
import Footer from './Footer';

const Privacy = () => {
  return (
    <Container text style={{ margin: '50px 0 100px 0' }}>
      <TopSection simple />

      <Header as="h1">Privacy policy</Header>

      <p>Put your words here.</p>

      <Divider />
      <Footer />
    </Container>
  );
};

export default Privacy;
