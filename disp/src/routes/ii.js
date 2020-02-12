import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Ii({ dispatch, namesss }) {
  console.log(namesss)
  return (
    <div className={styles.normal}>
      <Layout>
        {/* <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" className={styles.nole}>nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header> */}
        <Content style={{ padding: '0 50px', }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff', }}>
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
                    系统配置项
                    </div>
                    </Menu.Item>
                  <Menu.Item key="2" ><div className={styles.onts}><Icon type="setting" />系统入口</div></Menu.Item>
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
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
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


