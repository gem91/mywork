import React, { useEffect, useRef } from 'react';
import './ImageReveal.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// components
import InfoText from './InfoText';
import ThumbImage from './ThumbImage';

const ImageReveal = ({isPc}) => {

   const imgRef1 = useRef(null)
   const imgRef2 = useRef(null)
   const imgRef3 = useRef(null)
   const imgRef4 = useRef(null)

    
  useEffect(() => {      
    gsap.registerPlugin(ScrollTrigger);
    if(isPc) {
         // pc version
         gsap.to(imgRef1.current, {
          scrollTrigger: {
            trigger: imgRef1.current,
            start: 'top 30%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // scrub: true,
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    
          gsap.to(imgRef2.current, {
           scrollTrigger: {
            trigger: imgRef2.current,
            start: 'top 40%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    
          gsap.to(imgRef3.current, {
           scrollTrigger: {
            trigger: imgRef3.current,
            start: 'top 75%',
            // end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // scrub: true,
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    
          gsap.to(imgRef4.current, {
           scrollTrigger: {
            trigger: imgRef4.current,
            start: 'top 30%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            // scrub: true,
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    } else {
         // pc version 아닐때
         gsap.to(imgRef1.current, {
          scrollTrigger: {
            trigger: imgRef1.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    
          gsap.to(imgRef2.current, {
           scrollTrigger: {
            trigger: imgRef2.current,
            start: 'top 40%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    
          gsap.to(imgRef3.current, {
           scrollTrigger: {
            trigger: imgRef3.current,
            start: 'top 30%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    
          gsap.to(imgRef4.current, {
           scrollTrigger: {
            trigger: imgRef4.current,
            start: 'top 30%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            // scrub: true,
          },
          delay: 0.3,
          opacity: 1,
          duration: 1.5,
          Y: 100,
        });
    }
    
    
  }, []);


  useEffect(()=>{
    window.addEventListener('scroll', setTranslate);
    return () => {
      window.removeEventListener('scroll', setTranslate);
    }
  })

// Util functions
function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Event Listeners
// onClick add clases before transition
const items = document.getElementsByClassName('image');
Array.prototype.forEach.call(items, function(item,i) {
  item.addEventListener('click',function(e){
    // For testing purposes im using toggle. Remove Later
    console.log(i);
    item.classList.toggle('active');
    Array.prototype.forEach.call(items, function(otherItem,i) {
      if(otherItem !== item) 
        otherItem.classList.toggle('close');
    });
  });
});


// Scroll image Animation (small Y movement)
const inners = document.getElementsByClassName('thumb');
const maxTranslate = 30;

const setTranslate = () => {
  Array.prototype.forEach.call(inners, function(item, i){
    const rect = item.getBoundingClientRect();
    const top = Math.min(0, Math.max(-100, (rect.top * 100) / rect.height));
    const bottom = Math.min(100,Math.max(0, ((rect.bottom - window.innerHeight) *100) / rect.height));
    
    let minAbsValue = 0;
    // If bot values are 0 it means the image is inside viewport
    
    // Always get biggest value
    if(Math.abs(top) > Math.abs(bottom)) {
      minAbsValue = top;
    }
    if(Math.abs(bottom) > Math.abs(top)) {
      minAbsValue = bottom;
    }
    // If image is smaller that viewport
    // Caculate closest percentage.
    // If the image extends to the top and the bottom the same height
    // then value will be 0
    if(top !== 0 && bottom!== 0) {
      minAbsValue = top + bottom;
    }
    // Then map it to a number between MaxTranslate negative and positive
    const mapped = map(minAbsValue,-100,100,-maxTranslate,maxTranslate).toFixed(6);
    item.style.transform = `translateY(${mapped*-1}%)`;
  });
  
}

  return (
    <>
     <div className='animaImages'>
        <div className='left'>
            <div className='image image-2'>
              <div ref={imgRef1} className='img img-vert'>
                <ThumbImage 
                  imgSrc={require('../../assets/images/my_img03.jpg')}
                  imgAlt='test'
                />
                <InfoText title='Propulsive' tag='Good Point' small='view' />
              </div>
              <InfoText title='Propulsive' tag='Good Point' small='view' />
          </div>
            <div className='image image-4'>
              <div ref={imgRef2} className='img img-hor'>
                <ThumbImage 
                  imgSrc={require('../../assets/images/my_img02.jpg')} 
                  imgAlt='test'
                />
                <InfoText title='Inquisitive' tag='Design' small='view' />
              </div>
              <InfoText title='Inquisitive' tag='Design' small='view' />
          </div>
        </div>
        <div className='right'>
            <div className='image image-1'>
              <div ref={imgRef3} className='img img-hor'>
                <ThumbImage 
                  imgSrc={require('../../assets/images/my_img04.jpg')} 
                  imgAlt='test'
                />
                <InfoText title='Challenging' tag='Organization' small='view' />
              </div>
              <InfoText title='Challenging' tag='Organization' small='view' />
          </div>
            <div className='image image-3'>
              <div ref={imgRef4} className='img img-square'>
              <ThumbImage 
                  imgSrc={require('../../assets/images/my_img01.jpg')} 
                  imgAlt='test'
                />
                <InfoText title='Inquisitive' tag='Lettering' small='view' />
              </div>
              <InfoText title='Inquisitive' tag='Lettering' small='view' />
          </div>
        </div>
      </div>
    </>
  )
};

export default ImageReveal;