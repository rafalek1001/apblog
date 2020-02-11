import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SRLWrapper } from "simple-react-lightbox";

const Photo = () => {

  function handleShowPhotos() {
    let photos = [];
    for (let i = 1; i < 20; i++) {
      photos.push(<li className="gallery-li">
        <div className="gallery-thumb">
          <a href={require(`../images/gallery${i}.JPG`)} data-attribute="SRL">
            <img src={require(`../images/gallery-thumb${i}.jpg`)} alt="" className="gallery-pic" />
            <div className="gallery-icon">
              <FontAwesomeIcon icon={faSearch} size="3x" style={{ marginTop: '12px' }}></FontAwesomeIcon>Zobacz
          </div>
          </a>
        </div>
      </li>)
    }
    return photos
  }

  return (
    <>
      <SRLWrapper>
        {handleShowPhotos()}
      </SRLWrapper>
    </>
  );
}

export default Photo;