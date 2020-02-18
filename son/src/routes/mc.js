import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Fon from './mcc/fon';
import Ye from './mcc/ye';
import An from './mcc/an';
function Mc() {
  return (
    <div className={styles.normal} >
        <Fon />
        <An />
        <Ye />
    </div>
  );
}

export default Mc;