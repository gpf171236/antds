import React from 'react';
import { connect } from 'dva';
import styles from './nas.css';
import { Tabs } from 'antd';
import Xuan from './xuan';
import Zc from './zc';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


function Fen() {
    return (
        <div >
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="基础信息" key="1">
                    <Xuan />
                    <Zc />
    </TabPane>
                <TabPane tab="角色" key="2" >
                    Content of Tab Pane 2
    </TabPane>
                <TabPane tab="组织机构" key="3">
                    Content of Tab Pane 3
    </TabPane>
            </Tabs>
        </div>
    );
}





function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export default Fen;