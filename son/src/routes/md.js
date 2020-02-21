import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Bz from './mdd/bz';

function Md() {
  return (
    <div className={styles.normal}>
        <Bz />
    </div>
  );
}
export default Md;