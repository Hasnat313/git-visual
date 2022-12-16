import {
  Avatar, Col, Divider,
  Image, Input, Row,
  Space, Typography
} from "antd";

import {
  PlusCircleOutlined, SearchOutlined,
  UserOutlined
} from "@ant-design/icons";
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import chatImage from "../../assets/Banners/banner2.png";
import "./MessagesPage.scss";

const { Title, Text } = Typography;
export default function MessagesPage() {
  return (
    <Col className="MessagesPage">
      <Row style={{ width: "100%", overflow: "hidden" }} className="mainRow">
        <Col lg={{ span: 7 }} md={{ span: 8 }} className="list">
          <Space direction="vertical" size="middle">
            <Title style={{ color: "white" }}>Messages</Title>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search"
              size="large"
            />

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Text
              style={{
                color: "#B4B5B7",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TbMessage /> &nbsp; All Message
            </Text>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col span={24} className="info_card">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Row style={{ width: "100%", overflow: "hidden" }}>
                  <Col span={5}>
                    <Avatar
                      icon={<UserOutlined />}
                      style={{ width: "100%", height: "auto" }}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col span={13}>
                    <Space direction="vertical">
                      <Title level={4} style={{ margin: "0", color: "white" }}>
                        Killan James
                      </Title>
                      <Text style={{ color: "green" }}>Typing...</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" style={{ textAlign: "end" }}>
                      <Text style={{ color: "#A9ABAD" }}>4:30 PM</Text>
                      <Text style={{ color: "white" }}>2</Text>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Space>
        </Col>

        <Col lg={{ span: 17 }} md={{ span: 16 }} className="chatOpen">
          <Col span={24} className="chat">
            <Space>
              <Avatar
                icon={<UserOutlined />}
                style={{ width: 70, height: "auto" }}
                src="https://joeschmoe.io/api/v1/random"
              />
              <Title
                level={2}
                style={{ color: "white", margin: 0 }}
                className="chatTitle"
              >
                TESTING
              </Title>
            </Space>
          </Col>

          <Col span={24} className="chat_message">
            <Space style={{ alignItems: "start" }}>
              <Avatar
                icon={<UserOutlined />}
                style={{ width: 40, height: "auto" }}
                src="https://joeschmoe.io/api/v1/random"
              />

              <Col>
                <Space direction="vertical">
                  <Col>
                    <Text
                      strong
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "21px",
                        color: "white",
                      }}
                    >
                      Killan James
                    </Text>
                    <Text style={{ marginLeft: "3rem", color: "#7C8B9F" }}>
                      10:12 AM
                    </Text>
                  </Col>

                  <Col>
                    <Space direction="vertical">
                      <Col className="messageBox">
                        <Text>Hi, Are you still Web Designer.</Text>
                      </Col>
                      <Col className="messageBox">
                        <Text>would love to see some Design 😁</Text>
                      </Col>
                    </Space>
                  </Col>
                </Space>
              </Col>
            </Space>

            <Divider plain>Today, March 24</Divider>

            <Space style={{ alignItems: "start" }}>
              <Avatar
                icon={<UserOutlined />}
                style={{ width: 40, height: "auto" }}
                src="https://joeschmoe.io/api/v1/random"
              />

              <Col>
                <Space direction="vertical">
                  <Col>
                    <Text
                      strong
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "21px",
                        color: "white",
                      }}
                    >
                      Killan James
                    </Text>
                    <Text style={{ marginLeft: "3rem", color: "#7C8B9F" }}>
                      10:12 AM
                    </Text>
                  </Col>

                  <Col>
                    <Space direction="vertical">
                      <Col className="messageBox">
                        <Text>
                          Hey, happy to hear from you. Yes, I will be back in a
                          couple fo days.
                        </Text>
                      </Col>
                      <Col className="messageBox">
                        <Text>Here are some Design i took earlier today.</Text>
                      </Col>

                      <Col>
                        <Space>
                          <Image
                            src={chatImage}
                            alt="SentImage"
                            width={150}
                            height={210}
                          />
                        </Space>
                      </Col>
                    </Space>
                  </Col>
                </Space>
              </Col>
            </Space>
          </Col>

          <Col span={24} className="messageArea">
            <Input
              placeholder="Add a Message..."
              suffix={
                <>
                  <PlusCircleOutlined /> &nbsp; <CiImageOn /> &nbsp;
                  <BsEmojiSmile />
                </>
              }
            />
          </Col>
        </Col>
      </Row>
    </Col>
  );
}
