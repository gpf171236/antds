import React from 'react';
import { connect } from 'dva';
import styles from './nam.css';
import { Menu, Icon, Switch, Table } from 'antd';

const { SubMenu } = Menu;

class Bz extends React.Component {
    state = {
        mode: 'inline',
        theme: 'light',
        arr: [
            {
                name: '初一  (GVN13)',
                e:'段国涛 (dgt)',
                s:'学生数2名',
                // box: [{ e: '段国涛 (dgt)', s: '学生数2名' }],
                arrs: [{ name: '公平夫', age: '77' }, { name: '公平夫2', age: '546' }]
            },
            {
                name: '语言基础班  (IY9RB)',
                // box: [{ e: '1111 (dgt)', s: '学生数2名' }],
                arrs: [{ name: '公平夫3', age: '66' }, { name: '公平夫25', age: '523156' }]
            },
            {
                name: '双一流  (XXG08)',
                arrs: [{ name: '公平夫4', age: '44' }, { name: '公平夫26', age: '1541' }]
            },
            {
                name: '985 (6OW7E)',
                arrs: [{ name: '公平夫4', age: '22' }, { name: '公平夫26', age: '5462' }]
            },
            {
                name: '211  (7SS0P)',
                arrs: [{ name: '公平夫4', age: '99' }, { name: '公平夫26', age: '46548' }]
            },
            {
                name: '我问问  (UWW3X)',
                arrs: [{
                    name: '公平夫4',
                    age: '88'
                }, {
                    name: '公平夫26',
                    age: '54'
                }]
            },

        ],
        der: '',
        boxs: '',
        boxa: '',
        data: ''
    };

    render() {
        // const columnst=[
        //     {
        //         title: 'e',
        //         dataIndex: 's',
        //         key: '1',
        //     },
        // ];
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: '1',
            },
            {
                title: 'age',
                dataIndex: 'age',
                key: '2',
            },
            {
                title: 'age',
                dataIndex: 'age',
                key: '3',
            },
            {
                title: 'age',
                dataIndex: 'age',
                key: '4',
            },
        ];
        return (
            <div style={{ position: 'relative' }}>
                <div className={styles.neik}>
                    <div style={{ height: 50, borderBottom: '1px solid #e9e9e9' }}>
                        <div className={styles.ktmo}>全部班组</div>
                    </div>
                    <div style={{ padding: '24px 0px 0px 20px' }}>
                        <Menu
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={this.state.mode}
                            theme={this.state.theme}
                        >
                            {
                                this.state.arr.map((item, index) => (
                                    <Menu.Item key={index} onClick={() => {
                                        
                                        this.setState({
                                            der: item.name,
                                            boxs: item.e,
                                            boxa: item.s,
                                            data: item.arrs
                                            
                                        })

                                        console.log(this.state.boxs)
                                        
                                    }}>{item.name}</Menu.Item>
                                ))
                            }
                        </Menu>
                    </div>

                </div>

                <div className={styles.bou}>
                    <div style={{ height: 50, borderBottom: '1px solid #e9e9e9', }}>
                        <div style={{ float: 'left', padding: '0px 20px', lineHeight: '50px' }}>
                            {this.state.der}
                        </div>
                    </div>
                    <div>
                        <div style={{float:'left',padding:'0 20px'}}>{this.state.boxs}</div>
                        <div style={{float:'left'}}>{this.state.boxa}</div>
                    </div>
                {/* <div  neiks={columnst} inm={this.state.boxs} style={{padding:'20px 0 '}}></div> */}
                    
                    <Table columns={columns} dataSource={this.state.data} style={{ padding: '0 20px' }} pagination={false} />
                </div>
            </div>
        );
    }
}
export default Bz;
