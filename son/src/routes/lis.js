import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import { Link, Router, Route, Switch } from 'dva/router';
import Ma from './ma'
import Mb from './mb'
import Mc from './mc'
import Md from './md'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function Lis({ dispatch, namesss }) {
    console.log(namesss)
    return (
        <div style={{ height: '100%' }} className={styles.lognt}>
            <Layout style={{ height: '100%' }}>
                <Header className="header" width={200} style={{ background: '#fff' }}>
                    {/* <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        width={200} style={{ background: '#fff' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu> */}
                    <div className={styles.magts}><img src='http://ww3.sinaimg.cn/bmiddle/864f4c14jw1ekdknpw8vsg205u04c4qp.gif' /></div>
                </Header>
                <Layout style={{ height: '100%' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span className={styles.kont}>
                                        <Icon type="bank" />
                                        系统
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><div className={styles.onts}><Icon type="setting" />系统配置项</div></Menu.Item>
                                <Menu.Item key="2"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                                <Menu.Item key="3"><div className={styles.onts}><Icon type="bars" />菜单</div></Menu.Item>
                                <Menu.Item key="4"><div className={styles.onts}><Icon type="solution" />审计日志</div></Menu.Item>
                                <Menu.Item key="5"><div className={styles.onts}><Icon type="solution" />公告通知</div></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span className={styles.kont}>
                                        <Icon type="user" />
                                        用户管理
              </span>
                                }
                            >
                                <Menu.Item key="6"><Link to="/ma"><div className={styles.onts}><Icon type="apple" />组织机构</div></Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/mb"><div className={styles.onts}><Icon type="trademark" />角色</div></Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/mc"><div className={styles.onts}><Icon type="user" />用户</div></Link></Menu.Item>
                                <Menu.Item key="9"><Link to="/md"><div className={styles.onts}><Icon type="profile" />班组管理</div></Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span className={styles.kont}>
                                        <Icon type="wallet" />
                                        数据管理
              </span>
                                }
                            >
                                <Menu.Item key="10">option9</Menu.Item>
                                <Menu.Item key="11">option10</Menu.Item>
                                <Menu.Item key="12">option11</Menu.Item>
                                <Menu.Item key="17">option12</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span className={styles.kont}>
                                        <Icon type="shop" />
                                        世界运营
              </span>
                                }
                            >
                                <Menu.Item key="13">option9</Menu.Item>
                                <Menu.Item key="14">option10</Menu.Item>
                                <Menu.Item key="15">option11</Menu.Item>
                                <Menu.Item key="16">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px',height:'100%',overflow:'auto'}} >
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <div style={{width:'100%',height:'100%',overflow:'auto'}}>
                        <Content style={{background: '#fff',padding: 24,marginTop: 24, minHeight: 280}} >
                            <Route path="/ma"  component={Ma} />
                            <Route path="/mb"  component={Mb} />
                            <Route path="/mc"  component={Mc} />
                            <Route path="/md"  component={Md} />
                            </Content>
                            </div>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}
// ,flex:'none'

// Ii=connect((state)=>{
//   return{
//     ...state.colors
//   };
// })(Ii);
export default Lis;