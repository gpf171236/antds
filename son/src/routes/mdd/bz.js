import React from 'react';
import { connect } from 'dva';
import styles from './nam.css';
import { Menu, Icon, Switch } from 'antd';

const { SubMenu } = Menu;

class Bz extends React.Component {
    state = {
        mode: 'inline',
        theme: 'light',
    };

    //   changeMode = value => {
    //     this.setState({
    //       mode: value ? 'vertical' : 'inline',
    //     });
    //   };

    //   changeTheme = value => {
    //     this.setState({
    //       theme: value ? 'dark' : 'light',
    //     });
    //   };

    render() {
        return (
            <div style={{position:'relative'}}>
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
                            <Menu.Item key="1" p>

                                <div style={{ float: 'left' }}>
                                    初一&nbsp;&nbsp;(GVN13)
            </div>
                            </Menu.Item>
                            <Menu.Item key="2">

                                <div style={{ float: 'left' }}>
                                    语言基础班&nbsp;&nbsp;(IY9RB)
            </div>
                            </Menu.Item>
                            <Menu.Item key="3" p>
                                <div style={{ float: 'left' }}>
                                    初一&nbsp;&nbsp;(GVN13)
            </div>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <div style={{ float: 'left' }}>
                                    语言基础班&nbsp;&nbsp;(IY9RB)
            </div>
                            </Menu.Item>
                            <Menu.Item key="5" p>
                                <div style={{ float: 'left' }}>
                                    初一&nbsp;&nbsp;(GVN13)
            </div>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <div style={{ float: 'left' }}>
                                    语言基础班&nbsp;&nbsp;(IY9RB)
            </div>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <div style={{ float: 'left' }}>
                                    语言基础班&nbsp;&nbsp;(IY9RB)
            </div>
                            </Menu.Item>
                        </Menu>
                    </div>

                </div>
                
                <div className={styles.bou}></div>
            </div>
        );
    }
}

export default Bz;