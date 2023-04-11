import React from 'react';
import styles from './ToyProject.module.scss'
import BadgeIcon from 'components/IconItems/BadgeIcon';
import { Link } from 'react-router-dom';

const ArticleTemplete = ({data}) => {
  return(
  <article key={data.id} className={`${styles.panel} panel`}>
    <div className={styles.itemContent}>
      <div className={styles.itemImage}>
        <Link to={`${data.url}`} target={'_blank'}>
          <img src={require(`../../assets${data.imgURL}`)} alt={data.title} />
        </Link>
      </div>
      <div className={styles.itemBody}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.desc}>{data.desc}</p>
        <ul className={styles.tags}>
          { data.tags.map((tag, idx) => (
            <li key={tag}><BadgeIcon iconName={tag} /></li>
          )) }
        </ul>
        <div className={styles.btnWrap}>
          { data.url && 
            <Link to={`${data.url}`} target={'_blank'}>Show Demo</Link>
          }
        </div>
      </div>
    </div>
  </article>
  )
};

export default ArticleTemplete;