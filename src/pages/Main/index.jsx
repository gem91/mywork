import React, { useState } from 'react';
import styles from './Main.module.scss';

import Instagram from '../../components/Instagram';
import ListCards from '../../components/ListCards';
import BreadCrumbs from '../../components/BreadCrumbs';
// import TabMenu from '../../components/Tabs/TabMenu';
// import TabContent from '../../components/Tabs/TabContent';

const Main = (props) => {
	const skillData = [
		{
			type: "Lang",
			subject : [
				{ skill : 'html', num : 90 }, { skill: "css", num : 90 }, { skill: "scss", num : 90 }
			]
		},
		{
			type: "Front",
			subject : [
				{ skill : 'js', num : 90 }, { skill: "react", num : 90 }, { skill: "vue", num : 90 }
			]
		},
		{
			type: "Design",
			subject : [
				{ skill : 'photoshop', num : 90 }, { skill: "Illust", num : 90 }, { skill: "Zeplin", num : 90 }
			]
		},
	]

	const [currentTab, setCurrentTab] = useState(0);
	const handleTabMenu = (idx) => {
    setCurrentTab(idx)
  }
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<BreadCrumbs text={'About'}></BreadCrumbs>
				<h3 className={styles.bigTitle}>
					Who Am I ?
				</h3>
				<Instagram />
				<div className={styles.tabs}>
					<ul className={styles.tabMenu}>
						{ skillData.map(({type}, idx) => (
							<li key={idx} 
								className={currentTab === idx ? styles.clicked :  ''}
								onClick={() => {handleTabMenu(idx)}}
							>
								<button type='button'>{type}</button>
							</li>
							))
						}
					</ul>

					<div className={styles.tabContents}>
						<ul>
							{ skillData.map(({type, subject},idx) => (
								<li>
									<ul className={styles.skillBox}>
										{
											subject.map(({skill, num}) => (
												<li className={styles.graph}>
													<span className={styles.skillType}>{skill}</span>
													<div className={styles.line}></div>
													<span className={styles.score}>{num}<em>%</em></span>
												</li>
											))
										}
									</ul>
								</li>
							))}
						</ul>
					</div>
				</div>
					
				<div className={styles.companyLogo}>
					<h4>Which Companies I Worked With</h4>
					<ul>
						<li><img src={require('../../assets/images/logo/hyundai.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kia-b.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kids.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kiehls.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kia-b.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kids.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kiehls.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/media-pr.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/young.png')} alt='test' /></li>
					</ul>
				</div>
				<h4 className={styles.tagTitle}>
					<span>My Tags</span>
				</h4>
				<ListCards />
				<p className={styles.text}>
					<em>#도전적인</em> <em>#변함없는</em> <em>#추진력 있는</em> <em>#탐구심이 많은</em><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit aperiam suscipit. Placeat, quas. Repudiandae blanditiis ipsam rerum!
				</p>
			</div>
		</div>
	)
	
	};

export default Main;