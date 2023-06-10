import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/gallery';

const Gallery = () => (
  <Main
    title="gallery"
    description="Take a look at my casual gallery."
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2><Link to="/gallery">Gallery</Link></h2>
          <p>Random photos</p>
        </div>
      </header>
      {data.map((gallery) => (
        <Cell
          data={gallery}
          key={gallery.title}
        />
      ))}
    </article>
  </Main>
);

export default Gallery;
