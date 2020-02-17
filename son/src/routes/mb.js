
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Input } from 'antd';
import Nei from './mbb/nei';
import Sou from './mbb/sou';
import Anniu from './mbb/anniu';

const { Search } = Input;

function Mb() {
  return (
    <div style={{ position: 'relative' }}>

      <div>
        <Sou  />
        <Anniu />
        <Nei />
      </div>
    </div>
  );
}

export default Mb;