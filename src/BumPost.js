import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Divider, Header } from 'semantic-ui-react';

const BumPost = ({ date, instagram, image, title }) => {
  return (
    <div>
      <Header as="h2">{title}</Header>
      <div style={{ marginBottom: '10px' }}>
        <i>{date}</i>
      </div>
      <div align="center">
        <a href={instagram}>
          <LazyLoadImage alt={title} src={image} effect="blur" />
        </a>
      </div>
      <Divider />
    </div>
  );
};

export default BumPost;
