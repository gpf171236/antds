import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Input } from 'antd';

const { Search } = Input;

function Ma() {
  return (
    <div  style={{position:'relative'}}>

        <div className={styles.nokt}>
    <Search
      placeholder="输入关键字搜索"
      onSearch={value => console.log(value)}
      style={{ width: 400 }}
    />
  </div>
    </div>
  );
}

export default Ma;