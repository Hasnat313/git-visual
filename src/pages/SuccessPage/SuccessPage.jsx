import { ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Space, Button } from "antd";

const { Text, Title } = Typography;

export default function SuccessPage() {
  return (
    <Col
      span={24}
      className="SuccessPage"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingRight: "80px",
        paddingLeft: "80px",
      }}
    >
      <Col span={24} style={{ textAlign: "center" }}>
        <Space direction="vertical" size="middle">
          <Title>Upgrade Successful !</Title>
          <Text strong>
            You can now make Job postings, by viewing options in top left !
          </Text>

          <Button
            style={{
              width: "231px",
              height: "33px",
              marginTop: "15px",
              background: "#59F83F",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
          >
            Make a Post <ArrowRightOutlined />
          </Button>
        </Space>
      </Col>
    </Col>
  );
}
