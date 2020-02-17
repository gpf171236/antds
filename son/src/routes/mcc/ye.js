import React from 'react';
import { connect } from 'dva';
import Styles from './nas.css'
import { Table } from 'antd';


const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
        // width:'400px',
        height:'20px',
        render: text => <a>{text}</a>,
    },
    {
        title: '用户编号',
        dataIndex: 'age',
    },
    {
        title: '姓名',
        dataIndex: 'address',
    },
    {
        title: '角色',
        dataIndex: 'a',
    },
    {
        title: '邮箱地址',
        dataIndex: 'd',
    },
    {
        title: '手机号',
        dataIndex: 'c',
    },
    {
        title: '邮箱地验证',
        dataIndex: 'd',
    },
    {
        title: '手机号码验证',
        dataIndex: 'e',
    },
    {
        title: '启用',
        dataIndex: 'f',
    },
    {
        title: '锁定',
        dataIndex: 'g',
    },
];
const data = [
    {
        key: '1',
        name: 'jz1',
        age: 7,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',

    },
    {
        key: '2',
        name: 'jz2',
        age: 42,
        address: '02P4C003',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '3',
        name: 'jz2',
        age: 32,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
    {
        key: '4',
        name: 'jz2',
        age: 99,
        address: '',
        a: 'Admin',
        b: '',
        c: '18788546975',
        d: '已验证',
        e: '未验证',
        f: '已启用',
        g: '未锁定',
    },
];
// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

function Ye() {
    return (

        <div style={{ position: 'relative' }}>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data}  pagination={false} bordered={true} y={false}  />
            
        </div>
    );
}

export default Ye;