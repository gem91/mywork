import React from 'react';

import styles from './BlogImage.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Navigation } from "swiper";

const BlogCardLists = ({imgData, mainImg, setMainImg, setMainAlt, fullImgRef, setTitle, setDesc, setId, setLink, onPopup, isMobile}) => {

  const handleCardImg = (id, e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const { src, alt } = target

    let getTextPosition = src.indexOf('/works');
    let srcString = src.substr(getTextPosition);
    if ( srcString === mainImg ) return;

    // 큰 이미지에 정보값 넣기
    fullImgRef.current.setAttribute('src', setMainImg(srcString))
    fullImgRef.current.setAttribute('alt', setMainAlt(alt))

    setId(id)
    setDesc(imgData[id].desc)
    setTitle(imgData[id].title)
    setLink(imgData[id].link)
  }

  return (
    <div className={styles.imgLists}>
      <Swiper
        breakpoints= {{
          320: { 
            slidesPerView: 3, 
          },
          968: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        spaceBetween={10}
        mousewheel={true}
        // scrollbar={{
        // hide: false,
        // }}
        speed={800}
        modules={[ Mousewheel, Navigation ]}
      >
      { imgData.map(({imgURL, alt, id}) => (
        <SwiperSlide key={id}>
          <span className={styles.thumb}>
            <img src={process.env.PUBLIC_URL + imgURL} alt={alt} onClick={ e => handleCardImg(id, e)} />
          </span>
        </SwiperSlide>
      ))}
      </Swiper> 
    </div>
  )
};

export default BlogCardLists;