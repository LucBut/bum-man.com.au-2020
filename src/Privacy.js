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

      <p>
        Because we’re regular folks just like you, we promise not to do things
        that would make you feel as if you shouldn’t have trusted us.
      </p>

      <p>
        If you make a purchase through Gumroad or Etsy, they process your data.
        So if you’re concerned about this sort of thing – which you should be –
        you should also check out the{' '}
        <a href="https://gumroad.com/privacy">Gumroad</a> and{' '}
        <a href="https://www.etsy.com/au/legal/privacy/?ref=list">Etsy</a>{' '}
        privacy policies. We cannot see your payment information.
      </p>

      <p>
        We can see the email address you provide in our Gumroad dashboard. We’ll
        never sell it, buy an enormous electronic billboard in Times Square to
        display it, or do anything else with it.
      </p>

      <p>
        After you’ve made a purchase, you might get alerts from Gumroad or Etsy.
        You can always switch these off.
      </p>

      <p>
        We have no reason to email you after you’ve received your product.
        There’s no mailing list. If you want to keep up with what we’re doing,
        follow us on{' '}
        <a href="https://www.instagram.com/thebummandiaries/">Instagram</a> or{' '}
        <a href="https://twitter.com/MrBumMan">Twitter</a>.
      </p>

      <p>
        In Gumroad, we’ve also turned off the optional third-party analytics
        services (Google and Facebook).
      </p>

      <p>
        We aren’t tracking you. We don’t care what you do or where you’re doing
        it. That’d be creepy.
      </p>

      <Divider />
      <Footer />
    </Container>
  );
};

export default Privacy;
