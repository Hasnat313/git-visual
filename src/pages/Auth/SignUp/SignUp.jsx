import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  Space,
} from "antd";

import { FcGoogle } from "react-icons/fc";
import { AppleFilled } from "@ant-design/icons";

import "./../Auth.scss";
const { Title, Text } = Typography;

export default function SignUp() {
  return (
    <Col
      span={24}
      className="SignUp background_cover"
      style={{ padding: "20px 90px", overflow: "hidden" }}
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
            padding: "20px 50px",
            width: "100%",
          }}
          gutter={[0, 20]}
          className="card_inner"
          justify="center"
          align="middle"
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2}>Sign up with Gitvisual</Title>
            <Text>
              Already have an Account ? &nbsp;
              <Link to="/auth/login">
                <Text style={{ color: "#1565D8" }}>Log in</Text>
              </Link>
            </Text>
          </Col>

          <Col span={24}>
            <Form
              className="form"
              size="large"
              name="signup_form"
              autoComplete="on"
              layout="vertical"
              scrollToFirstError
              requiredMark="optional"
              // onFinish={}
              initialValues={{
                remember: true,
              }}
            >
              <Col span={24}>
                <Form.Item
                  // label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid name!",
                    },
                    { min: 3, message: "Too Short!" },
                    { max: 15, message: "Too Long!" },
                    {
                      pattern: /^[aA-zZ\s]+$/,
                      message: "Only alphabets are allowed for this field",
                    },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  // label="Username"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid name!",
                    },
                    { min: 3, message: "Too Short!" },
                    { max: 15, message: "Too Long!" },
                    {
                      required: true,
                      pattern: /^[aA-zZ\s]+$/,
                      message: "Only alphabets are allowed for this field",
                    },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  // label="Email"
                  name="email"
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
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  // label="Password"
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
              </Col>

              <div className="checkboxes">
                <Form.Item name="agree" valuePropName="checked">
                  <Checkbox>
                    I agree to{" "}
                    <Link to="#" className="link">
                      {" "}
                      terms & conditions{" "}
                    </Link>
                  </Checkbox>
                </Form.Item>

                <Form.Item name="emailUpdates" valuePropName="checked">
                  <Checkbox>Get updates and offers via email</Checkbox>
                </Form.Item>
              </div>

              <Col span={24} style={{ textAlign: "center" }}>
                <Form.Item>
                  {/* <Col span={24} className="blur" /> */}
                  <Button
                    type="primary"
                    className="primary_btn"
                    htmlType="submit"
                    // block
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Col>
            </Form>

            <Col span={24} style={{ textAlign: "center" }}>
              <Space
                direction="vertical"
                style={{ width: "100%", textAlign: "-webkit-center" }}
              >
                <Col span={24}>
                  <Divider plain>Or Sign Up with</Divider>
                </Col>

                <Col span={8}>
                  <Row
                    align="middle"
                    justify="space-between"
                    style={{ overflow: "hidden", width: "100%" }}
                  >
                    <Col>
                      <FcGoogle
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          background: "#FFFFFF",
                          fontSize: "60px",
                        }}
                      />
                    </Col>
                    <Col>
                      <AppleFilled
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          background: "#FFFFFF",
                          fontSize: "40px",
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Space>
            </Col>
          </Col>
        </Row>
      </Col>
    </Col>
  );
}
