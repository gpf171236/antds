
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Input } from 'antd';
import Nei from './oon/nei';
import Sou from './oon/sou';
import Anniu from './oon/anniu';

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