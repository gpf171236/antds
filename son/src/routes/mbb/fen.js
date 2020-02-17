import React from 'react';
import { connect } from 'dva';
import styles from './non.css';
import { Tabs, Icon } from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';

const { TabPane } = Tabs;

function Fen() {
    return (
        <div>
            <Tabs defaultActiveKey="2" >
                <TabPane
                    tab={
                        <span>
                            角色属性
        </span>
                    }
                    key="2"
                >
                    <div className="example-input" style={{ position: 'relative' }}>
                        <div className={styles.jsn}>角色名称 : </div>
                        <div className={styles.nput}>
                            <Input placeholder="请输入角色名称" />
                        </div>
                    </div>
                    <div style={{padding:'50px 0px'}}>
                        <div className={styles.yarns} >
                            <Checkbox onChange={onChange} style={{color:'black'}} defaultChecked={true}>设置为默认角色</Checkbox>
                        </div>
                    </div>
                    <div className={styles.yd}>新增用户将会默认拥有此角色</div>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            操作权限
        </span>
                    }
                    key="1"
                >
                    Tab 2
    </TabPane>
            </Tabs>
        </div>
    );
}





function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export default Fen;