import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import { EyeOutlined, HeartOutlined } from "@ant-design/icons";

import avatar from "./Avatar.png";
import css from "./ProjectItemAlt.module.scss";

const { Meta } = Card;
const { Text, Title } = Typography;

export default function ProjectItem({ project }) {
  return (
    <Card
      className={css["card"]}
      cover={<img alt="Project Cover" src={project?.cover} />}
    >
      <Meta
        avatar={<Avatar className={css["card__avatar"]} src={avatar} />}
        title={
          <Col span={24}>
            <Row
              // gutter={[20, 10]}
              style={{
                overflow: "hidden",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Col
                span={12}
                style={{ overflow: "hidden", alignItems: "center" }}
              >
                <Text className={css["card__name"]} strong>
                  {/* {project?.projectName} */}
                  Rejo
                  <Text className={css["card__badge"]} type="secondary">
                    {/* {project?.author} */} PRO
                  </Text>
                </Text>
              </Col>

              <Col span={10} style={{ textAlign: "end" }}>
                <Space
                  style={{
                    width: "100%",
                    textAlign: "end",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text className={css["card__likes"]}>
                    <HeartOutlined /> {project?.likes}
                  </Text>
                  <Text className={css["card__views"]}>
                    <EyeOutlined /> {project?.views / 100 + "K"}
                  </Text>
                </Space>
              </Col>
            </Row>
          </Col>
        }
      />
    </Card>
  );
}
