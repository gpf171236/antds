import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Fon from './mcc/fon';
import Ye from './mcc/ye';
function Mc() {
  return (
    <div className={styles.normal}>
        <Fon />
        <Ye />
    </div>
  );
}

export default Mc;