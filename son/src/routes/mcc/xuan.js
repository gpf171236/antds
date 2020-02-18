import React from 'react';
import { connect } from 'dva';
import styles from './nas.css';
import { Tabs } from 'antd';
import { Radio } from 'antd';

function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
}

function Xuan() {
    return (

        <div style={{ position: 'relative' }}>
            <div>
                <div>
                    <Radio.Group onChange={onChange} defaultValue="a">
                        <Radio.Button value="a">学生</Radio.Button>
                        <Radio.Button value="b">家长</Radio.Button>
                        <Radio.Button value="c">导师</Radio.Button>
                        <Radio.Button value="d">管理员</Radio.Button>
                    </Radio.Group>
                </div>

            </div>

        </div>
    );
}

export default Xuan;