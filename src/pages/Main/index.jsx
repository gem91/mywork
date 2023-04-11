import React, { useEffect, useRef } from 'react';
import styles from './Main.module.scss';

// data
import skillData from 'db/skills.json'
import companyLogos from 'db/projectLogo.json'

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//components
import Instagram from 'components/Instagram';
import BreadCrumbs from 'components/BreadCrumbs';
import TabComponent from 'components/TabComponent';
import SliderEffects from 'components/SliderEffect';
import LightTextEffect from 'components/LightTextEffect';
import PageNav from 'components/PageNav';
import ItemFadeEffect from 'components/ImageEffect/ItemFadeEffect';


const Main = ({isMobile, isPc}) => {
	const titleRef1 = useRef(null)
  useEffect(() => {      
    gsap.registerPlugin(ScrollTrigger);
		if(isPc){
			gsap.to(titleRef1.current, {
				scrollTrigger: {
				 trigger: titleRef1.current,
					start: 'top 60%',
				 end: 'bottom 20%',
				 toggleActions: 'play none none reverse',
			 },
			 opacity: 1,
			 duration: .4,
			 letterSpacing: 2,
			 x: 0,
		 });
		} else {
			gsap.to(titleRef1.current, {
				scrollTrigger: {
				 trigger: titleRef1.current,
					start: 'top 60%',
				 end: 'bottom 20%',
				 toggleActions: 'play none none reverse',
			 },
			 opacity: 1,
			 duration: .4,
			 letterSpacing: 2,
			 x: 0,
		 })
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


	return (
		<div className={styles.main}>
			<section className={styles.content}>
				<LightTextEffect title={'Hello there!'} text1={'Hi🙌. 클로이 월드에 놀러오신걸 환영합니다.'} text2={'REACT FRAMEWORK로 만든 포트폴리오입니다!'} />
			</section>
			<div className={styles.container}>
				<div className={styles.breadCrumbsBox}>
					<BreadCrumbs text={'About'} />
				</div>
				<div className={styles.profileBox}>
					<h3>Who Am I ?</h3>
					<Instagram />
				</div>
				<div className={styles.tagTextBox}>
					<p className={styles.tagText}><em>#도전적인</em> <em>#에너지 충만</em> <em>#책임감 넘치는</em> <em>#새로운 창의력</em></p>
					<p className={styles.desc}>
						<strong>인간은 적응의 동물</strong>이라는 말은 저의 삶의 모토입니다.<br />
						'도전'이란 것을 두려워않고 시도하다보면 결국에는 성장에 도착한다고 생각합니다.<br />
						<strong>상상을 구현하는 것.</strong> 그 과정을 즐기면서, Upgrade Myself하는 프론트엔드 개발자가 될 것입니다.
						{/* 개발하면서 제가 느낀 좋은 IT 서비스는 사용자의 입장에서 쓰기편한 서비스라 생각하고, 늘 사용자의 관점을 고안하며 개발하고 있습니다. */}
					</p>
				</div>
				
				<div className={styles.tabs}>
					<TabComponent tabData={skillData} isMobile={isMobile} />
				</div>
				<div className={styles.companyLogo}>
					<h3>Which <br className='m-br'></br>Companies I Worked With..!</h3>
					<SliderEffects imageData={companyLogos} />
				</div>
			</div>
			<div className={styles.imageFadeEffect}>
				<div className={styles.container}>
					<div className={styles.imageEffectBox}>
						<h3 ref={titleRef1}>My Tags</h3>
						<ItemFadeEffect isPc={isPc} />
					</div>
					{/* <ListCards /> */}
				</div>
			</div>
			<PageNav nextName={'web site'} nextLink={'/web'} prevLink={''} prevName={''} />
		</div>
	)
};

export default Main;