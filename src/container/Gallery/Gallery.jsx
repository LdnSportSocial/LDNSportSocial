import React from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  return (
    <div className='app__gallery flex__center' id='gallery'>
      <div className='app__gallery-content'>
        <h1 className='headtext__cormorant'>Our Work</h1>
        <p className='p__opensans' style={{ marginTop: '2rem' }}>
          See how we've strengthened our partners' brand visability at the
          world's premier sporting events.
        </p>
        <a
          type='button'
          className='custom__button'
          href='https://www.instagram.com/ldn.sport.social/'
          target='_blank'
          rel='noopener noreferrer'
        >
          View More
        </a>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {[
            images.gallery42,
            images.gallery41,
            images.gallery40,
            images.gallery39,
            images.gallery38,
            images.gallery37,
            images.gallery36,
            images.gallery35,
            images.gallery34,
            images.gallery33,
            images.gallery32,
            images.gallery31,
            images.gallery2,
            images.gallery3,
            images.gallery4,
            images.gallery5,
            images.gallery6,
            images.gallery7,
            images.gallery8,
            images.gallery9,
            images.gallery10,
            images.gallery11,
            images.gallery12,
            images.gallery14,
            images.gallery15,
            images.gallery16,
            images.gallery17,
            images.gallery18,
            images.gallery19,
            images.gallery20,
            images.gallery21,
            images.gallery22,
            images.gallery23,
            images.gallery24,
            images.gallery25,
          ].map((image, index) => (
            <div
              className='app__gallery-images_card flex__center'
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt='gallery_image' />
              <a
                className='gallery__image-icon'
                href='https://www.instagram.com/ldn.sport.social/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsInstagram />
              </a>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
