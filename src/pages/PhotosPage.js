import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/PhotosPage.css';
import Photo from '../components/Photo';
import SimpleReactLightbox from "simple-react-lightbox";

class PhotosPage extends Component {

  render() {

    return (
      <div className="gallery">
        <ul className="gallery-ul">
          <SimpleReactLightbox>
            <Photo />
          </SimpleReactLightbox>
        </ul>
      </div>
    );
  }
}

export default PhotosPage;