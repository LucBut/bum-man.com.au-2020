import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './image.css';

const BumMan = ({ alt, src }) => {
  return (
    <div align="center">
      <LazyLoadImage
        alt={alt}
        src={src} // use normal <img> attributes as props
        effect="blur"
      />
      <p>Lazy pink.</p>
      <Divider />
    </div>
  );
};

const App = () => {
  return (
    <Container text style={{ margin: '50px 0 100px 0' }}>
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="Pink" src="/bumman/5_Baby.jpg" />
      <BumMan alt="Pink" src="/bumman/6_Digitised for the archives_a.jpg" />
      <BumMan alt="meh" src="/bumman/10_Hipster.jpg" />
      <BumMan alt="meh" src="/bumman/11_Heat wave.jpg" />
      <BumMan alt="meh" src="/bumman/12_Wedding.jpg" />
      <BumMan alt="meh" src="/bumman/13_Downward dog.jpg" />
      <BumMan alt="meh" src="/bumman/14_Plank.jpg" />
      <BumMan alt="meh" src="/bumman/15_Cycling.jpg" />
      <BumMan alt="meh" src="/bumman/16_Tennis.jpg" />
      <BumMan alt="meh" src="/bumman/17_Blood donor.jpg" />
      <BumMan alt="meh" src="/bumman/18_Cocktail.jpg" />
      <BumMan alt="meh" src="/bumman/19_Library.jpg" />
      <BumMan alt="meh" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="meh" src="/bumman/20_Day off.jpg" />
      <BumMan alt="meh" src="/bumman/21_Night walk.jpg" />
      <BumMan alt="meh" src="/bumman/22_Open-plan_hot-desking.jpg" />
      <BumMan alt="meh" src="/bumman/23_9am.jpg" />
      <BumMan alt="meh" src="/bumman/24_Crossing.jpg" />
      <BumMan alt="meh" src="/bumman/25_Team check-in.JPG" />
      <BumMan alt="meh" src="/bumman/26_Hiking_Tasmania.JPG" />
      <BumMan alt="meh" src="/bumman/27_Pool.JPG" />
      <BumMan alt="meh" src="/bumman/28_Birthday.JPG" />
      <BumMan alt="meh" src="/bumman/29_Skiing.JPG" />
      <BumMan alt="meh" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="meh" src="/bumman/30_Poolside_Cairns.JPG" />
      <BumMan alt="meh" src="/bumman/31_Sunday_pizza.JPG" />
      <BumMan alt="meh" src="/bumman/32_Buggy.JPG" />
      <BumMan alt="meh" src="/bumman/33_Plane ride.JPG" />
      <BumMan alt="meh" src="/bumman/34_Sunday city walk.JPG" />
      <BumMan alt="meh" src="/bumman/35_Jet set.JPG" />
      <BumMan alt="meh" src="/bumman/36_Happy holidays.JPG" />
      <BumMan alt="meh" src="/bumman/37_Motel pool.JPG" />
      <BumMan alt="meh" src="/bumman/38_Bee friends.JPG" />
      <BumMan alt="meh" src="/bumman/39_Beer oclock.JPG" />
      <BumMan alt="meh" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="meh" src="/bumman/40_Stripey pants.JPG" />
      <BumMan alt="meh" src="/bumman/41_Afternoon tea.JPG" />
      <BumMan alt="meh" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="meh" src="/bumman/5_Baby.jpg" />
      <BumMan alt="meh" src="/bumman/6_Digitised for the archives_a.jpg" />
      <BumMan alt="meh" src="/bumman/6_Digitised for the archives_b.jpg" />
      <BumMan alt="meh" src="/bumman/7_Travelling.jpg" />
      <BumMan alt="meh" src="/bumman/8_Birthday_architect_sexy lady.jpg" />
      <BumMan alt="meh" src="/bumman/9_Beach.jpg" />
    </Container>
  );
};

export default App;
