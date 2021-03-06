import React from 'react';
import { connect } from 'dva';
import styles from './nas.css';
import Fen from './fen';

import { Drawer, Button } from 'antd';

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}


class An extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <div className={styles.wer}>
        <Button type="primary" onClick={this.showDrawer} className={styles.niu}>
          添加账号
        </Button>
        <Drawer
          title="添加账号"
          width={430}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            <Fen />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              取消
            </Button>
            <Button onClick={this.onClose} type="primary">
              确定
            </Button>
          </div>
        </Drawer>
        <Button className={styles.bot}>导出到EXCEL</Button>
        <Select defaultValue="更多操作" style={{ width: 120,textAlign:'center' }} onChange={handleChange} className={styles.bots}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="spy">yiminghe</Option>
    </Select>
      </div>
    );
  }
}


export default An;