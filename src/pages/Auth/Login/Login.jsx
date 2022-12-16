import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import "./../Auth.scss";
const { Title, Text } = Typography;

export default function Login() {
  return (
    <Col
      span={24}
      className="background_cover"
      style={{ minheight: "100vh", padding: "60px 90px", overflow: "hidden" }}
    >
      <Col
        className="card"
        lg={{ span: 10 }}
        md={{ span: 16 }}
        sm={{ span: 20 }}
      >
        <Row
          style={{
            overflow: "hidden",
            padding: "70px",
            width: "100%",
          }}
          gutter={[0, 20]}
          className="card_inner"
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2}>Gitvisual</Title>
            <Text type="secondary">Develop your image</Text>
          </Col>

          <Col span={24}>
            <Button className="google" block>
              <Space>
                <FcGoogle /> <Text>Sign in with Google</Text>
              </Space>
            </Button>
          </Col>

          <Divider plain>Or</Divider>

          <Col span={24}>
            <Form
              className="form"
              size="large"
              name="login_form"
              autoComplete="on"
              layout="vertical"
              scrollToFirstError
              requiredMark="optional"
              // onFinish={}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="email"
                label="Your email"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid email!",
                  },
                  {
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input placeholder="Write your email" />
              </Form.Item>

              <Form.Item
                label="Choose a password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  className="primary_btn"
                  htmlType="submit"
                  block
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col span={24} style={{ textAlign: "center" }}>
            <Text>
              Don’t have an account? &nbsp;
              <Link to="/auth/signup">
                <Text style={{ color: "#1565D8" }}>Create Account</Text>
              </Link>
            </Text>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Text>
              Forgot Password ? &nbsp;
              <Link to="/auth/forgotpassword">
                <Text style={{ color: "#1565D8" }}>Click Here</Text>
              </Link>
            </Text>
          </Col>
        </Row>
      </Col>
    </Col>
  );
}
