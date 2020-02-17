import React from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
import Styles from './nas.css'

const { Search } = Input;

function Fon() {
  return (

        <div className={Styles.ak} style={{position:'relative'}}>
    <Search
    className={Styles.none}
      placeholder="输入关键字搜索,将搜索[用户名][姓名][邮箱][手机号]"
      onSearch={value => console.log(value)}
      style={{ width: 480 }}
    />
  </div>
  );
}

export default Fon;