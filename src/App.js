import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const BumMan = props => {
  const { alt, src } = props;
  console.log(alt, src);
  return (
    <div align="center">
      <LazyLoadImage
        alt={alt}
        height={400}
        src={src} // use normal <img> attributes as props
        width={400}
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
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
      <BumMan alt="Pink" src="/bumman/1_Classic_pink.jpg" />
      <BumMan alt="Pink" src="/bumman/2_Running_green.jpg" />
      <BumMan alt="Pink" src="/bumman/3_Leggy_blue.jpg" />
      <BumMan alt="Pink" src="/bumman/4_Body hugging.jpg" />
    </Container>
  );
};

export default App;
