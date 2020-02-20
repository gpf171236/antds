import React from 'react';
import { connect } from 'dva';
import styles from './nas.css';
import { Tabs } from 'antd';
import { Radio } from 'antd';
import { Router, Route, Switch } from 'dva/router';



function Xuan({dispatch,flag}) {
    console.log(flag)
    return (

        <div style={{ position: 'relative' }}>
            <div>
                <div>
                    <Radio.Group defaultValue="a">
                        <Radio.Button value="a" onClick={()=>
                            dispatch({
                                type:"example/setState",
                                payload:{
                                    flag:1
                                }
                            })
                        }>学生</Radio.Button>
                        <Radio.Button value="b" onClick={()=>
                            dispatch({
                                type:"example/setState",
                                payload:{
                                    flag:2
                                }
                            })
                        }>家长</Radio.Button>
                        <Radio.Button value="c" onClick={()=>
                            dispatch({
                                type:"example/setState",
                                payload:{
                                    flag:3
                                }
                            })
                        }>导师</Radio.Button>
                        <Radio.Button value="d" onClick={()=>
                            dispatch({
                                type:"example/setState",
                                payload:{
                                    flag:4
                                }
                            })
                        }>管理员</Radio.Button>
                    </Radio.Group>
                </div>


            </div>

        </div>
    );
}

Xuan=connect((state)=>{
    return{
      ...state.example
    };
  })(Xuan);
  export default Xuan;