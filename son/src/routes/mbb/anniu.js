import React from 'react';
import { connect } from 'dva';
import styles from './non.css';
import { Modal, Button } from 'antd';
import Fen from './fen';

class Anniu extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={styles.wer}>
        <Button type="primary" onClick={this.showModal} className={styles.niu}>
          添加角色
        </Button>
        <Modal
          title="添加角色"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="backsubmitb" onClick={this.handleCancel}>
              保存
            </Button>,
            <Button key="submitb" type="primary"  onClick={this.handleOk}>
              取消
            </Button>,
          ]}
        >
          <p><Fen /></p>
        </Modal>
      </div>
    );
  }
}

export default Anniu;

// import { Modal, Button } from 'antd';
// function Anniu() {
//     return (
//         <div className={styles.normal}>
//             <div className={styles.wer}>
//                 <div className={styles.niu}>
                    
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Anniu;