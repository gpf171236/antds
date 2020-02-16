import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Lis from './lis'
function IndexPage() {
  return (
    <div className={styles.normal}>
      <Lis />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
