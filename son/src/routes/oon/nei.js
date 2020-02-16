import React from 'react';
import { connect } from 'dva';
import styles from './non.css';
import { Descriptions, Badge } from 'antd';
import { Table, Divider, Tag } from 'antd';
import { Button } from 'antd';

const { Column, ColumnGroup } = Table;


const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 'Admin',
        address: '2019-05-28T14:15:01.9462912',
        tags: ['系统', '默认'],
    },
    {
        key: '2',
        firstName: 'John',
        lastName: 'Brown',
        age: '夜叉',
        address: '2019-05-28T14:15:01.9462912',
        tags: ['系统', '默认'],
    },
];
function Nei() {
    return (
        <div className={styles.normal}>
            <Table dataSource={data} className={styles.por} pagination={false}>
                <Column title="角色名称" dataIndex="age" key="age" className={styles.poa} />
                <Column
                    className={styles.poa}
                    title="角色标签"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (<span>{tags.map(tag => (<Tag color="blue" key={tag} className={styles.npmkt}>{tag}</Tag>))}</span>)}
                />
                <Column title="创建时间" dataIndex="address" key="address" className={styles.poa} />
                <Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a>编辑</a>
                            &nbsp;&nbsp;
                            <a>删除</a>
                        </span>
                    )}
                />
            </Table>
        </div>
    );
}


export default Nei;