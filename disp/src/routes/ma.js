import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function ma({namesss}) {
  console.log(namesss)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>我是用户</h1>
    </div>
  );
}

// ma=connect((state)=>{
//   return{
//     ...state.colors
//   };
// })(ma);
export default ma;


