import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Ii from './ii.js';
import Ma from './ma.js';

function IndexPage({name}) {
  console.log(name)
  return (
    <div className={styles.normal}>
      <Ii />
      <Ma />
    </div>
  );
}

IndexPage=connect((state)=>{
  return{
    ...state.example
  };
})(IndexPage);
export default IndexPage;


