import { Avatar, Col, Divider, Input, Layout, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";

import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import "./ChatPage.scss";
import MsgIcon from "./img/msg.svg";
import MessagesItem from "./Components/MessageItem/MessagesItem";
import UserItem from "./Components/UserItem/UserItem";
import WriteMessage from "./Components/WriteMessage/WriteMessage";

import { users } from "./chatList";
import { messages } from "./messagesList";

const { Text, Title } = Typography;
const { Header, Sider, Content, Footer } = Layout;

const ChatPage = () => {
	const [collapsed, setCollapsed] = useState(false);

	const [isTablet, setTsTablet] = useState(
		useMediaQuery({
			query: "(max-width: 768px)",
		})
	);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(max-width: 1190px)",
	});

	useEffect(() => {}, [isTablet]);

	return (
		<section className="ChatPage">
			<Layout style={{ height: "calc(100vh - 48px)" }}>
				<Sider style={{ height: "calc(100vh - 48px)", overflow: "hidden" }} trigger={null} className={"chat__sidebar " + (collapsed ? "collapsedClass" : "")} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<div className="logo" />
					<Space
						direction="vertical"
						size="middle"
						style={{
							width: "100%",
							justifyContent: "center",
						}}
					>
						<Title
							className="sidebarTitle"
							level={3}
							style={{
								color: "white",
								textAlign: "center",
								lineHeight: "1",
								marginBottom: "2",
							}}
						>
							Messages
						</Title>

						<Input className="search-msg" prefix={<SearchOutlined />} placeholder=" Search..." size="large" />

						<List dataSource={users.slice(0, 2)} renderItem={(user) => <UserItem user={user} />} />

						<Divider plain orientation="left" orientationMargin="0" style={{ color: "white", margin: "0px" }}>
							<img src={MsgIcon} alt="Message" />{" "}
							<span className="all-msgs" style={{ color: "#B4B5B7" }}>
								{" "}
								All Message{" "}
							</span>
						</Divider>

						<div
							id="scrollableDiv"
							style={{
								height: 326,
								overflow: "auto",
							}}
						>
							<List dataSource={users.slice(2)} renderItem={(user) => <UserItem user={user} />} />
						</div>
					</Space>
				</Sider>
				<Layout className="chat-layout" style={{ height: "calc(100vh - 48px)", overflow: "hidden" }}>
					<Header className="chat-content">
						<Space size="small">
							<Avatar
								size={{
									xs: 22,
									sm: 22,
									md: 28,
									lg: 34,
									xl: 40,
									xxl: 40,
								}}
								icon={<UserOutlined />}
								src="https://joeschmoe.io/api/v1/random"
							/>

							<Title className="chat-title" level={3} style={{ margin: 0, color: "white" }}>
								Ayoub Khan
							</Title>
						</Space>
					</Header>
					<Content
						className="chat-content"
						style={{
							margin: "24px 16px",
							padding: "24px",
							background: "#1b2023",
							minHeight: 280,
							overflowY: "scroll",
						}}
					>
						{/* {(() => {})()} */}

						{messages?.map((message, index) => {
							return <MessagesItem key={index} date={message.date} name={message.name} avatar={message.avatar} MsgsArray={message.msgslist} />;
						})}
					</Content>
					<Footer
						style={{
							textAlign: "center",
						}}
					>
						<Col span={24} className="messageArea">
							<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 22 }} lg={{ span: 14 }} xl={{ span: 14 }} style={{ padding: "10px" }}>
								<WriteMessage />
							</Col>
						</Col>
					</Footer>
				</Layout>
			</Layout>
		</section>
	);
};
export default ChatPage;
