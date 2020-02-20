import React from 'react';
import { connect } from 'dva';
import styles from './nass.css';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import Zd from './zd';
import Ze from './ze';
import Zf from './zf';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

class Zc extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const { flag } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div>
                {
                    flag == 1 ?
                        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ float: 'none' }}>

                            <Form.Item style={{ marginBottom: '15px' }}>
                                <div style={{ height: 35 }}>
                                    <div style={{ float: 'left', color: 'red', lineHeight: '47px', height: '35px', paddingRight: 4, fontSize: 20 }}>*</div>
                                    <div style={{ color: 'black' }}>用户名</div>
                                </div>
                                {getFieldDecorator('e', {
                                    rules: [{ required: true, message: 'Username is required!' }],
                                })(<Input placeholder="请填写用户名" />)}
                            </Form.Item>
                            <Form.Item style={{ marginBottom: '15px' }}>
                                <div style={{ height: 35 }}>
                                    <div style={{ float: 'left', color: 'red', lineHeight: '47px', height: '35px', paddingRight: 4, fontSize: 20 }}>*</div>
                                    <div style={{ color: 'black' }}>创建密码</div>
                                </div>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                        {
                                            validator: this.validateToNextPassword,
                                        },
                                    ],
                                })(<Input.Password placeholder="请填写密码" />)}
                            </Form.Item>

                            <Form.Item style={{ marginBottom: '15px' }}>
                                <div style={{ height: 35 }}>
                                    <div style={{ float: 'left', color: 'red', lineHeight: '47px', height: '35px', paddingRight: 4, fontSize: 20 }}>*</div>
                                    <div style={{ color: 'black' }}>姓名</div>
                                </div>
                                {getFieldDecorator('username', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ],
                                })(<Input placeholder="请填写姓名" />)}
                            </Form.Item>

                            <Form.Item style={{ marginBottom: '15px' }}>
                                <div style={{ height: 35 }}>
                                    <div style={{ float: 'left', color: 'red', lineHeight: '47px', height: '35px', paddingRight: 4, fontSize: 20 }}>*</div>
                                    <div style={{ color: 'black' }}>昵称</div>
                                </div>
                                {getFieldDecorator('nickname', {
                                    rules: [
                                        {
                                            required: this.state.checkNick,
                                            message: 'Please input your nickname',
                                        },
                                    ],
                                })(<Input placeholder="请填写昵称(六个字符以内)" />)}
                            </Form.Item>
                            <Form.Item >
                                <div style={{ height: 35 }}>
                                    <div style={{ float: 'left', color: 'red', lineHeight: '47px', height: '35px', paddingRight: 4, fontSize: 20 }}></div>
                                    <div style={{ color: 'black' }}>加入班组</div>
                                </div>
                                {getFieldDecorator('select', {
                                    rules: [{ required: true, message: 'Please select your country!' }],
                                })(
                                    <Select placeholder="">
                                        <Option value="china">China</Option>
                                        <Option value="usa">U.S.A</Option>
                                    </Select>,
                                )}
                            </Form.Item>
                        </Form> : null

                }
                {
                    flag == 2 ?
                        <Zd /> : null
                }
                {
                    flag == 3 ?
                        <Ze /> : null
                }
                                {
                    flag == 4 ?
                        <Zf /> : null
                }
            </div>
        );
    }
}
Zc = connect((state) => {
    return {
        ...state.example
    };
})(Zc);
export default Form.create({ name: 'register' })(Zc);