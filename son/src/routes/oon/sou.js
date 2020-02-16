import React from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
import Styles from './non.css'

const { Search } = Input;

function Sou() {
  return (

        <div className={Styles.ak}>
    <Search
    className={Styles.none}
      placeholder="输入关键字搜索"
      onSearch={value => console.log(value)}
      style={{ width: 400 }}
    />
  </div>
  );
}

export default Sou;