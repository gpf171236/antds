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

class Zd extends React.Component {
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
        //   const prefixSelector = getFieldDecorator('prefix', {
        //   });

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item style={{ marginBottom: '15px' }}>
                    <div style={{ height: 35 }}>
                        <div style={{ float: 'left', color: 'red', lineHeight: '47px', height: '35px', paddingRight: 4, fontSize: 20 }}>*</div>
                        <div style={{ color: 'black' }}>手机号</div>
                    </div>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input placeholder="请填写手机号" style={{ width: '100%' }} />)}
                    {/* addonBefore={prefixSelector}  */}
                </Form.Item>
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
                        <div style={{ color: 'black' }}>学生用户名</div>
                    </div>
            {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input placeholder="请选择学生" />)}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Zd);


export default WrappedRegistrationForm;