import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Router, Route, Switch } from 'dva/router';
import Sty from '../js/Sty' 
import Ma from './ma'
import Ks from './Ks'
import { IconMap } from 'antd/lib/result';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Ii({ dispatch, namesss }) {
  console.log(namesss)
  return (
    <div style={{ height: '100%' }}>
      <Layout style={{ height: '100%' }}>
        <Header style={{background:'white'}}>
        <div className={styles.magts}><img src='http://ww3.sinaimg.cn/bmiddle/864f4c14jw1ekdknpw8vsg205u04c4qp.gif' /></div>
    </Header>
        <Content>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Layout style={{ padding: '24px 0', background: '#fff', height: '100%' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
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
                  <Menu.Item key="1" className={styles.kkks}>
                    <div className={styles.onts}>
                      <Icon type="setting" />
                      <Link to="/ma">系统配置项</Link>
                    </div>
                  </Menu.Item>
                  <Menu.Item key="2" ><div className={styles.onts}><Icon type="setting" /><Link to="/ks">系统入口</Link></div></Menu.Item>
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
                  <Menu.Item key="5"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="6"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="7"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="8"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
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
                  <Menu.Item key="9"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="10"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="11"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="12"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span className={styles.kont}>
                      <Icon type="shop" />
                      世界运营
                      </span>}>
                  <Menu.Item key="13"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="14"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="15"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                  <Menu.Item key="16"><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280, height: '100%' }}>
                  <Route path="/ma"  component={Ma} />
                  <Route path="/ks"  component={Ks} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

// Ii=connect((state)=>{
//   return{
//     ...state.colors
//   };
// })(Ii);
export default Ii;


