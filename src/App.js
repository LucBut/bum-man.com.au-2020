/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { Container, Divider, Pagination } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-less/semantic.less';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './image.css';

import TopSection from './TopSection';
import Footer from './Footer';
// import BumPost from './BumPost';

import { bumArray } from './bumArray';
console.log('There are', bumArray.length, 'Bums.');

const App = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (e, { activePage }) => {
    setPage(activePage);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  const TenBumMen = ({ startNumber }) => {
    const filteredBumArray = bumArray.filter((bumItem, i) => {
      if (i >= startNumber && i < startNumber + 10) {
        return true;
      }
      return false;
    });
    return filteredBumArray;
  };

  return (
    <Container text style={{ margin: '50px 0 100px 0' }}>
      <TopSection />

      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Pagination
          activePage={page}
          onPageChange={handlePageChange}
          totalPages={15} // also update below
        />
      </div>

      <Divider />

      {page === 1 ? <TenBumMen startNumber={0} /> : null}
      {page === 2 ? <TenBumMen startNumber={10} /> : null}
      {page === 3 ? <TenBumMen startNumber={20} /> : null}
      {page === 4 ? <TenBumMen startNumber={30} /> : null}
      {page === 5 ? <TenBumMen startNumber={40} /> : null}
      {page === 6 ? <TenBumMen startNumber={50} /> : null}
      {page === 7 ? <TenBumMen startNumber={60} /> : null}
      {page === 8 ? <TenBumMen startNumber={70} /> : null}
      {page === 9 ? <TenBumMen startNumber={80} /> : null}
      {page === 10 ? <TenBumMen startNumber={90} /> : null}
      {page === 11 ? <TenBumMen startNumber={100} /> : null}
      {page === 12 ? <TenBumMen startNumber={110} /> : null}
      {page === 13 ? <TenBumMen startNumber={120} /> : null}
      {page === 14 ? <TenBumMen startNumber={130} /> : null}
      {page === 15 ? <TenBumMen startNumber={140} /> : null}


      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Pagination
          activePage={page}
          onPageChange={handlePageChange}
          totalPages={15}
        />
      </div>

      <Divider />

      <Footer />
    </Container>
  );
};

export default App;
