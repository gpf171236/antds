import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function Ks({namesss}) {
  console.log(namesss)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>我是KS</h1>
    </div>
  );
}

// ma=connect((state)=>{
//   return{
//     ...state.colors
//   };
// })(ma);
export default Ks;


