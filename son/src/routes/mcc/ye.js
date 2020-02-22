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
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '用户编号',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '姓名',
        dataIndex: 'address',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '角色',
        dataIndex: 'a',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
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
        h: '未锁定',

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
        h: '未锁定',
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
        h: '未锁定',
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
        h: '未锁定',
    },
    {
        key: '5',
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
        h: '未锁定',
    },
    {
        key: '6',
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
        h: '未锁定',
    },
    {
        key: '7',
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
        h: '未锁定',
    },
    {
        key: '8',
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
        h: '未锁定',
    },
    {
        key: '9',
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
        h: '未锁定',
    },
    {
        key: '10',
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
        h: '未锁定',
    },
    {
        key: '11',
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
        h: '未锁定',
    },
    {
        key: '12',
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
        h: '未锁定',
    },
    {
        key: '13',
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
        h: '未锁定',
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
            <Table rowSelection={rowSelection} columns={columns} dataSource={data}  pagination={false} bordered={true} y={false} scroll={{}} /> 
        </div>
    );
}

export default Ye;


// class Bz extends React.Component {
//     state = {
//         mode: 'inline',
//         theme: 'light',
//         arr: [
//             {
//                 name:'初一&nbsp;&nbsp;(GVN13)',
//                 arrs:[{name:'公平夫',age:'24'},{name:'公平夫2',age:'242'}]
//             },
//             {
//                 name:'初二&nbsp;&nbsp;(GVN13)',
//                 arrs:[{name:'公平夫3',age:'24'},{name:'公平夫25',age:'242'}]
//             },
//             {
//                 name:'初三&nbsp;&nbsp;(GVN13)',
//                 arrs:[{name:'公平夫4',age:'24'},{name:'公平夫26',age:'242'}]
//             }
//         ],
//         data:''
//     };

//     //   changeMode = value => {
//     //     this.setState({
//     //       mode: value ? 'vertical' : 'inline',
//     //     });
//     //   };

//     //   changeTheme = value => {
//     //     this.setState({
//     //       theme: value ? 'dark' : 'light',
//     //     });
//     //   };

//     render() {
//         const columns = [
//             {
//               title: 'Name',
//               dataIndex: 'name',
//               key: 'name',
//             },
//             {
//                 title: 'age',
//                 dataIndex: 'age',
//                 key: 'age',
//               },
//           ];
//         return (
//             <div style={{ position: 'relative' }}>
//                 <div className={styles.neik}>
//                     <div style={{ height: 50, borderBottom: '1px solid #e9e9e9' }}>
//                         <div className={styles.ktmo}>全部班组</div>
//                     </div>
//                     <div style={{ padding: '24px 0px 0px 20px' }}>
//                         <Menu
//                             style={{ width: 256 }}
//                             defaultSelectedKeys={['1']}
//                             defaultOpenKeys={['sub1']}
//                             mode={this.state.mode}
//                             theme={this.state.theme}
//                         >
//                             {
//                                 this.state.arr.map((item,index)=>(
//                                 <Menu.Item key={index} onClick={()=>{
//                                     this.setState({
//                                         data:item.arrs
//                                     })
//                                 }}>{item.name}</Menu.Item>
//                                 ))
//                             }
//                         </Menu>
//                     </div>

//                 </div>

//                         <div className={styles.bou}>
//                             <div></div>
//                             <Table columns={columns} dataSource={this.state.data} />
//                         </div>
//             </div>
//         );
//     }
// }
