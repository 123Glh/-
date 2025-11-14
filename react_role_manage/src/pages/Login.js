import { Component } from "react";
import { Layout } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
const { Header, Content, Footer } = Layout;
class Login extends Component {
  render() {
    const onFinish = (values) => {
      let { username, password } = values;
      // 把 usename 和 password 发送到服务端
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <Layout className="login">
        <Header className="header">
          <h1>后台管理系统</h1>
        </Header>
        <Content className="content">
          <div className="formLogin">
            <h2>登录</h2>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: "请输入用户名" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer className="footer">333</Footer>
      </Layout>
    );
  }
}

export default Login;
