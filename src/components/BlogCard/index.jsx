import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import BlogCardLists from './BlogCardLists';
import Mbutton from '../Button/Mbutton';
import Popup from '../Popup';

import styles from './BlogImage.module.scss';

const BlogCard = ({data, isMobile}) => {
  const fullImgRef = useRef(null)
  const fullTitleRef = useRef(null)
  const fullDescRef = useRef(null)
  const linkRef = useRef(null)
  const [ id, setId ] = useState(0);
  const [ images, setImages ] = useState(data[id].images);
  const [ mainImg, setMainImg ] = useState(data[id].imgURL);
  const [ mainAlt, setMainAlt ] = useState(data[id].alt)
  const [ title, setTitle ] = useState(data[id].title)
  const [ desc, setDesc ] = useState(data[id].desc)
  const [ link , setLink ] = useState(data[id].link)
  const [ tags , setTags ] = useState(data[id].skill)
  const [ client , setClient ] = useState(data[id].client)
  const [ date , setDate ] = useState(data[id].date)
  const [ isPopup, setIsPopup] = useState(false);
  
  console.log(desc);
  const stringArr = desc.split('.')

  const openPopup = () => {
    setImages(data[id].images)
    setTags(data[id].skill)
    setTitle(data[id].title)
    setDesc(data[id].desc)
    setClient(data[id].client)
    setDate(data[id].date)
    setIsPopup(true)
  }

  return (
  <>
  <div className={styles.blogWrap}>
    {
      <button className={styles.mainImg} onClick={openPopup}>
        <img ref={fullImgRef} src={process.env.PUBLIC_URL + mainImg} alt={mainAlt} />
      </button>
    }
    <div className={styles.blogContent}>
      <div className={styles.btnWrap}>
        <Mbutton onClick={openPopup} innerText={'More Detail'} setIsPopup={setIsPopup} />
        <Link ref={linkRef} to={link} target="_blank">Go To Site</Link>
      </div>
      <div className={styles.textBox}>
        <h3 ref={fullTitleRef} className={styles.title}>{title}</h3>
        <p ref={fullDescRef} className={styles.desc}>
          { stringArr.map((sentence, index) => (
            <span key={index}>{sentence}.</span>
          ))}
        </p>
      </div>
      <BlogCardLists
        imgData={data}
        setId={setId}
        setMainImg={setMainImg}
        mainImg={mainImg}
        setMainAlt={setMainAlt}
        fullImgRef={fullImgRef}
        setTitle={setTitle}
        setDesc={setDesc}
        setLink={setLink}
        onPopup={openPopup}
        isMobile={isMobile}
       />
    </div>
  </div>
  {/* popup */}
  { isPopup &&
    <Popup
      images={images}
      title={title} 
      stringArr={stringArr} 
      mainImg={mainImg} 
      mainAlt={mainAlt} 
      tags={tags}
      client={client}
      date={date}
      setIsPopup={setIsPopup}
    />
  }
  </>
  )
};

export default BlogCard;